import { Component, OnInit } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';

import { FuseConfigService } from '@fuse/services/config.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { NgOnDestory$ } from 'app/utils/hooks';

@Component({
  selector: 'app-fuse-navbar-style-1',
  templateUrl: './style-1.component.html',
  styleUrls: ['./style-1.component.scss'],
})
export class FuseNavbarStyle1Component implements OnInit {
  fuseConfig: any;
  navigation: any;

  constructor(
    private _ngOnDestroy$: NgOnDestory$,
    private _fuseConfigService: FuseConfigService,
    private _fuseNavigationService: FuseNavigationService
  ) {}

  ngOnInit(): void {
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
}
