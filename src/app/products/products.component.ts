import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, ProductService } from '../product.service';

@Component({
  selector: 'in-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  products$: Observable<IProduct[] | any> = this.productService.products$! as Observable<IProduct[]>;

  constructor(private productService: ProductService) {
    console.log('Entered ProductsComponent constructor');
  }

  ngOnInit(): void {
    console.log('Entered ProductsComponent ngOnInit function');
  }

  trackById(index: any, item: IProduct): number {
    console.log('Entered ProductsComponent trackById function');
    return item.id;
  }
}
