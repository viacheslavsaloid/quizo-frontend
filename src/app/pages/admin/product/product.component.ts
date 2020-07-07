import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import { FormGroup } from '@angular/forms';
import { Product } from 'app/models/admin';
import { FormlyFormComponent } from 'app/components/shared';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class ProductComponent implements OnInit {
  public productForm: FormGroup;
  public fields: string[] = ['name', 'description'];
  public tabs: any[];
  public product: Product;

  public pageType = 'new';

  constructor() {}

  public saveProduct() {}
  public addProduct() {}

  ngOnInit() {
    this.productForm = new FormGroup({});

    this.tabs = [
      {
        name: 'Basic Info',
        component: FormlyFormComponent,
        inputs: {
          fields: 'product-basic',
          model: this.product,
          form: this.productForm,
        },
        outputs: {},
      },
    ];
  }
}
