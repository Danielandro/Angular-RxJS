import { Component } from '@angular/core';

import { empty } from 'rxjs';

import { ProductService } from '../product.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html'
})
export class ProductListAltComponent {
  pageTitle = 'Products';
  errorMessage = '';
  selectedProductId;
  products$ = this.productService.products$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return empty();
      })
    );

  constructor(private productService: ProductService) { }


  onSelected(productId: number): void {
    console.log('Not yet implemented');
  }
}
