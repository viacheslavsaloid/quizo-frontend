import { Component, OnInit } from '@angular/core';
import { Tab } from '../../../models/components/tabs';
import { FormlyFormComponent } from '../../../components/shared/formly';
import { TableComponent } from '../../../components/shared/layout';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { take } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-admin-templates',
  templateUrl: './admin-templates.component.html',
  styleUrls: ['./admin-templates.component.scss'],
})
export class AdminTemplatesComponent implements OnInit {
  public readonly tabs: Tab[];

  constructor(private readonly _httpClient: HttpClient) {
    this.tabs = this.getTabs();
  }

  public getTabs(): Tab[] {
    const UPLOAD_TEMPLATE = {
      name: 'UPLOAD_TEMPLATE',
      component: FormlyFormComponent,
      inputs: {
        fields: ['file'],
      },
      outputs: {
        submited: (changes) => this.onGameUpdate(changes),
      },
    };

    const UPLOADED_TEMPLATE = {
      name: 'UPLOADED_TEMPLATES',
      component: TableComponent,
      inputs: {
        columns: [{ prop: 'name', name: 'название' }],
      },
      outputs: {},
    };

    return [UPLOAD_TEMPLATE, UPLOADED_TEMPLATE];
  }

  private onGameUpdate(changes): void {
    const formData = new FormData();

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < changes.file.files.length; i++) {
      formData.append('files', changes.file.files[i]);
    }

    this._httpClient
      .post(environment.apiUrl + 'templates', formData)
      .pipe(take(1), untilDestroyed(this))
      .subscribe((res) => {
        console.log(res);
      });
  }

  ngOnInit(): void {}
}
