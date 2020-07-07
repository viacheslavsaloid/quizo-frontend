import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { StateRepository } from '@ngxs-labs/data/decorators';
import { createEntityCollections } from '@ngxs-labs/data/utils';
import { AppState } from 'src/app/utils/classes/state.class';
import { Question } from 'src/app/models/game';

const entityCollection = createEntityCollections();

@StateRepository()
@State({
  name: 'questions',
  defaults: {
    ...entityCollection,
    total: 0,
  },
})
@Injectable()
export class QuestionsState extends AppState<Question> {}
