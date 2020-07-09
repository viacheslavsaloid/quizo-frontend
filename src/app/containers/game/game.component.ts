import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/game';
import { ActivatedRoute } from '@angular/router';
import { NgOnDestory$ } from 'src/app/hooks';
import { takeUntil } from 'rxjs/operators';
import { Game } from 'src/app/models/game';
import { AppImagesService } from 'src/app/services/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public game: Game;

  constructor(
    private _ngOnDestroy$: NgOnDestory$,
    private _gamesService: GamesService,
    private _activatedRoute: ActivatedRoute,
    private _imagesService: AppImagesService
  ) {}

  public getLogo = (game: Game) => game && this._imagesService.getPath(game.logo[0]);
  public getBackground = (game: Game) =>
    game && { 'background-image': 'url(' + this._imagesService.getPath(game.background[0]) + ')' };

  ngOnInit(): void {
    this._activatedRoute.params.pipe(takeUntil(this._ngOnDestroy$)).subscribe(async (params) => {
      const id: string = params['id'];

      this.game = await this._gamesService.getOne({ id });
    });
  }
}
