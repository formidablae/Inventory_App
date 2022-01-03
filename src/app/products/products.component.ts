import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'in-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() {
    console.log('Entered ProductsComponent constructor');
  }

  ngOnInit(): void {
    console.log('Entered ProductsComponent ngOnInit function');
  }

}
