import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, map, of } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'https://dummyjson.com/products';
  private products: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  load(): Observable<any[]> {
    if (this.products.length) {
      return of(this.products);
    }

    return this.httpClient.get(this.url).pipe(
      map((response: any) => {
        this.products = response.products;
        return this.products;
      })
    );
  }

  list() {
    return this.products;
  }

  get(id: number) {
    return this.products[id];
  }

  add(product: Product) {
    product.id = (this.products.length + 1);
    this.products.push(product);

    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: product.title,
        price: product.price,
        brand: product.brand,
        category: product.category,
        thumbnail: product.thumbnail
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  }

  update(id: number, product: Product) {
    this.products[id] = product;
    console.log(product, 'ko ja je li');

    fetch('https://dummyjson.com/products/' + (id + 1), { //products lista počinje od id 1, a moj (lokalni) kod od 0
      method: 'PATCH', //radi se o update-u postojećih backend podataka, stoga patch
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: product.title,
        price: product.price,
        brand: product.brand,
        category: product.category,
        thumbnail: product.thumbnail
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  }
  

  delete(id: number) {
    this.products.splice(id, 1);
  }
}
