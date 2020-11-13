import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { StateRepository } from '@ngxs-labs/data/decorators';
import { createEntityCollections } from '@ngxs-labs/data/utils';
import { AppState } from 'src/app/utils/classes/state.class';
import { Player } from '../../../models/game/player.model';

const entityCollection = createEntityCollections();

@StateRepository()
@State({
  name: 'players',
  defaults: {
    ...entityCollection,
    total: 0,
  },
})
@Injectable()
export class PlayersState extends AppState<Player> {}
