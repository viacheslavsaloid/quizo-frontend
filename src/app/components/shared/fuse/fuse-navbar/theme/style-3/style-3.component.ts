import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { delay, filter, take, takeUntil } from 'rxjs/operators';

import { FuseConfigService } from '@fuse/services/config.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { FusePerfectScrollbarDirective } from '@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { NgOnDestory$ } from 'app/utils/hooks';

@Component({
  selector: 'app-fuse-navbar-style-3',
  templateUrl: './style-3.component.html',
  styleUrls: ['./style-3.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FuseNavbarStyle3Component implements OnInit {
  fuseConfig: any;
  navigation: any;

  private _fusePerfectScrollbar: FusePerfectScrollbarDirective;

  constructor(
    private _ngOnDestroy$: NgOnDestory$,
    private _fuseConfigService: FuseConfigService,
    private _fuseNavigationService: FuseNavigationService,
    private _fuseSidebarService: FuseSidebarService,
    private _router: Router
  ) {}

  @ViewChild(FusePerfectScrollbarDirective, { static: true })
  set directive(theDirective: FusePerfectScrollbarDirective) {
    if (!theDirective) {
      return;
    }

    this._fusePerfectScrollbar = theDirective;

    this._fuseNavigationService.onItemCollapseToggled.pipe(delay(500), takeUntil(this._ngOnDestroy$)).subscribe(() => {
      this._fusePerfectScrollbar.update();
    });

    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        take(1)
      )
      .subscribe(() => {
        setTimeout(() => {
          this._fusePerfectScrollbar.scrollToElement('navbar .nav-link.active', -120);
        });
      });
  }
  ngOnInit(): void {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this._ngOnDestroy$)
      )
      .subscribe(() => {
        if (this._fuseSidebarService.getSidebar('navbar')) {
          this._fuseSidebarService.getSidebar('navbar').close();
        }
      });

    this._fuseNavigationService.onNavigationChanged
      .pipe(
        filter((value) => value !== null),
        takeUntil(this._ngOnDestroy$)
      )
      .subscribe(() => {
        this.navigation = this._fuseNavigationService.getCurrentNavigation();
      });

    this._fuseConfigService.config.pipe(takeUntil(this._ngOnDestroy$)).subscribe((config) => {
      this.fuseConfig = config;
    });
  }

  toggleSidebarOpened(): void {
    this._fuseSidebarService.getSidebar('navbar').toggleOpen();
  }

  toggleSidebarFolded(): void {
    this._fuseSidebarService.getSidebar('navbar').toggleFold();
  }
}
