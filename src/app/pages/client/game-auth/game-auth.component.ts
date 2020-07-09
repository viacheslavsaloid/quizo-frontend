import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/game';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/game';
import { AuthService } from 'src/app/services/core';
import { map } from 'rxjs/operators';
import { AuthType } from 'src/app/models/auth/auth-type';

@Component({
  selector: 'app-game-auth',
  templateUrl: './game-auth.component.html',
  styleUrls: ['./game-auth.component.scss'],
})
export class GameAuthComponent implements OnInit {
  public fields$: Observable<string>;
  public game: Game;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _gamesService: GamesService
  ) {}

  public async onSubmit(data) {
    const { id } = this.game;
    const { token } = data;

    const isUser = this._authService.user;

    console.log(!isUser);
    if (!isUser) {
      console.log('sign up');

      await this._authService.login({ type: AuthType.SIGN_UP, data });
    }

    const hasAccess = await this._gamesService.hasAccess({ id });

    console.log('hasAccess', !hasAccess);

    if (!hasAccess) {
      await this._gamesService.registerToGame({ id, token });
    }

    this._gamesService.navigateToGame(this.game);
  }

  async ngOnInit() {
    const id = this._activatedRoute.snapshot.parent.params['id'];

    this.game = await this._gamesService.getOne({ id });

    const hasAccess = await this._gamesService.hasAccess({ id });
    const needToken = this.game.private && !hasAccess;

    this.fields$ = this._authService.user$.pipe(map((user) => (user ? (needToken ? 'token' : '') : 'sign_up')));
  }
}
