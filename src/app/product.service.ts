import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IProduct {
  id: number;
  name: string;
  active: boolean;
  expirationDate: string;
  description: string;
  type: string;
  features?: string[];
}

function generateId() {
  console.log('Entered ProductService generateId function');
  return Math.floor(Math.random() * 1000);
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: IProduct[] = [
    {
      id: generateId(),
      name: 'Product 1',
      active: false,
      expirationDate: '2023-01-01',
      description: 'Product 1 description, the one you need',
      type: 'wooden',
    },
    {
      id: generateId(),
      name: 'Product 2',
      active: false,
      expirationDate: '2022-06-01',
      description: 'Product 2 description, the one you want',
      type: 'titanium',
    },
    {
      id: generateId(),
      name: 'Product 3',
      active: false,
      expirationDate: '2023-01-08',
      description: 'Product 3 description, the one you don\'t need',
      type: 'steel',
    },
    {
      id: generateId(),
      name: 'Product 4',
      active: false,
      expirationDate: '2022-08-01',
      description: 'Product 4 description, the one you don\'t want',
      type: 'aluminum',
    },
    {
      id: generateId(),
      name: 'Product 5',
      active: false,
      expirationDate: '2020-01-01',
      description: 'Product 5 description, the one you like',
      type: 'copper',
    },
    {
      id: generateId(),
      name: 'Product 6',
      active: false,
      expirationDate: '2021-12-03',
      description: 'Product 6 description, the one you fancy',
      type: 'marble',
    },
    {
      id: generateId(),
      name: 'Product 7',
      active: false,
      expirationDate: '2022-02-05',
      description: 'Product 7 description, the one you hate',
      type: 'golden',
    },
    {
      id: generateId(),
      name: 'Product 8',
      active: false,
      expirationDate: '2022-09-18',
      description: 'Product 8 description, the one you don\'t like',
      type: 'silver',
    },
    {
      id: generateId(),
      name: 'Product 9',
      active: false,
      expirationDate: '2022-03-23',
      description: 'Product 9 description, the one you don\'t fancy',
      type: 'platinum',
    },
    {
      id: generateId(),
      name: 'Product 10',
      active: false,
      expirationDate: '2022-01-27',
      description: 'Product 10 description, the one you don\'t hate',
      type: 'bronze',
    },
    {
      id: generateId(),
      name: 'Product 11',
      active: false,
      expirationDate: '2022-05-23',
      description: 'Product 11 description, the one you bring home',
      type: 'metallic',
    },
  ];

  products$ = new BehaviorSubject<IProduct[]>(this.products);

  constructor() {
    console.log('Entered ProductService constructor');
  }
}
