import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/game';
import { Game } from 'src/app/models/game';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  public games$: Observable<Game[]>;

  constructor(private _gamesService: GamesService) {}

  public onGameClick(game: Game) {
    this._gamesService.navigateToGame(game);
  }

  ngOnInit(): void {
    this.games$ = this._gamesService.getMany$();
  }
}
