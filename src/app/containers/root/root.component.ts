import { Component } from '@angular/core';
import { FormlyValidationLoader } from 'src/app/settings/loaders';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent {
  constructor(private formlyValidation: FormlyValidationLoader) {
    this.formlyValidation.init();
  }
}
