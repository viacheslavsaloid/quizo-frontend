import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { takeUntil } from 'rxjs/operators';
import { AppRoutes } from 'src/app/models/utils';
import { AppConfigsService } from 'src/app/services/core';
import { NgOnDestory$ } from 'src/app/hooks';

@Component({
  selector: 'app-layout-1',
  templateUrl: './layout-1.component.html',
  styleUrls: ['./layout-1.component.scss'],
})
export class Layout1Component implements OnInit {
  @ViewChild('sidenav') private sidenav: MatSidenav;
  @Output() public exitClicked = new EventEmitter();

  @Input() public navLinks: AppRoutes;

  public mode: 'over' | 'side';

  public showTitle: boolean;

  constructor(
    private _ngOnDestory$: NgOnDestory$,
    private _breakpointObserver: BreakpointObserver,
    private _appConfigsService: AppConfigsService
  ) {}

  public get isOpen() {
    return this.mode === 'side';
  }

  public get showBurger() {
    return this.mode === 'over';
  }

  public onExitClick() {
    this.exitClicked.emit();
  }

  public onBurgerClick() {
    if (this.mode === 'over') {
      this.toogleSidenav(!this.isOpen);
    } else {
      this.toogleTitle();
    }
  }

  public toogleMode(matches: boolean) {
    this.mode = matches ? 'over' : 'side';
    this.toogleSidenav(!matches);
    // if mobile -> always show title
    if (matches) {
      this.toogleTitle();
    }
  }

  public toogleTitle() {
    this.showTitle = this.mode === 'side' ? !this.showTitle : true;
    this._appConfigsService.set('sidebar', this.showTitle);
  }

  public toogleSidenav(isOpen: boolean) {
    if (this.sidenav) {
      this.sidenav.toggle(isOpen);
    }
  }

  ngOnInit() {
    this.showTitle = this._appConfigsService.get('sidebar');

    this._breakpointObserver
      .observe(['(max-width: 599px)'])
      .pipe(takeUntil(this._ngOnDestory$))
      .subscribe((e) => this.toogleMode(e.matches));
  }
}
