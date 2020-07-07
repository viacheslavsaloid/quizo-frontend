import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/utils/services/crud.service';
import { ApiService, AppPopupService } from '../../core';
import { environment } from 'src/environments/environment';
import { QuestionsState } from 'src/app/store/states/admin';
import { Router } from '@angular/router';
import { ADMIN_ROUTES } from 'src/app/routes/admin/auth.routes';
import { Question } from 'src/app/models/game';

@Injectable()
export class QuestionsService extends CrudService<Question> {
  constructor(
    protected _apiService: ApiService,
    protected _router: Router,
    protected _questionsState: QuestionsState,
    protected _appPopupService: AppPopupService
  ) {
    super(
      _apiService,
      _appPopupService,
      _questionsState,
      _router,
      environment.questionsEndpoint,
      ADMIN_ROUTES.QUEST_ROUND.fullPath,
      'questions'
    );
  }
}
