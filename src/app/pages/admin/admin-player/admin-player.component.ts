import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PlayersService } from 'src/app/services/game';
import { IPlayer } from '../../../models/game';
import * as moment from 'moment';

@UntilDestroy()
@Component({
  selector: 'app-admin-player',
  templateUrl: './admin-player.component.html',
  styleUrls: ['./admin-player.component.scss'],
})
export class AdminPlayerComponent implements OnInit {
  public player: IPlayer;
  public rows;
  public columns = [
    {
      prop: 'date',
    },
    {
      prop: 'action',
    },
    {
      prop: 'description',
    },
  ];

  constructor(private _activatedRoute: ActivatedRoute, private _playersService: PlayersService) {}

  ngOnInit(): void {
    this._activatedRoute.params.pipe(untilDestroyed(this)).subscribe(async (params) => {
      const id: string = params['id'];

      console.log(id);

      this.player = await this._playersService.getOne({ id });
      this.rows = this.player.history.map((log) => ({
        ...log,
        date: moment(log.date).format('MMMM Do YYYY, h:mm:ss a'),
      }));
    });
  }
}
