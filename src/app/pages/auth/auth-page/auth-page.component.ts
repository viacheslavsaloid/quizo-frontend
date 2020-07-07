import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/core';
import { ActivatedRoute } from '@angular/router';
import { AuthType } from 'src/app/models/auth/auth-type';
import { Link } from 'src/app/models/utils';

import links from 'src/assets/links/auth';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  public fields: string;
  public type: string;
  public links: Link[];
  public title: string;

  public dataField: string = 'type'; // field, which declared in auth-routing.module.ts like a type;

  constructor(private _route: ActivatedRoute, private _authSerivce: AuthService) {}

  public onSubmit(data) {
    this._authSerivce.login({ type: this.type, data });
  }

  ngOnInit() {
    this.type = this._route.snapshot.data[this.dataField] as AuthType;
    this.fields = this.type;
    this.links = links[this.type];
    this.title = `PAGES.${this.type.toUpperCase()}`;
  }
}
