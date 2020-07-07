import { Component, OnInit } from '@angular/core';
import { FormlyFormComponent, ListComponent } from 'src/app/components/shared';
import { UsersService } from 'src/app/services/admin/users/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public tabs = [];

  constructor(private _usersService: UsersService) {}

  ngOnInit(): void {
    this.tabs = [
      {
        name: 'LIST',
        component: ListComponent,
        inputs: {
          items$: this._usersService.getMany$(),
          fabTrigger: {
            icon: 'add',
            func: () => this._usersService.openModalAndAddOne(),
          },
        },
        outputs: {
          sorted: (data) => this._usersService.sort(data),
          clicked: (data) => this._usersService.openModalAndUpdateOne({ data }),
        },
      },
      {
        name: 'FORM',
        component: FormlyFormComponent,
        inputs: {
          fields: ['firstName', 'lastName'],
          model: {},
        },
        outputs: {
          submited: (changes) => this._usersService.updateOne({ id: '0', changes }),
          deleted: () => this._usersService.removeOne({ id: '0' }),
        },
      },
    ];
  }
}
