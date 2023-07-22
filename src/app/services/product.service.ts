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

  load(): Observable<Product[]> {
    if (this.products.length) {
      return of(this.products);
    }

    return this.httpClient.get(this.url).pipe(
      map((response: { products: Product[] }) => {
        //kako response sam po sebi nema pristup nizu products unutar liste property-ja objekta koji dobija kao observable odgovor,
        //tako moramo da dodamo products tipa Product[] da bi dobili niz kako treba
        this.products = response.products;
        return this.products;
      })
    );
  }

  list(): Observable<Product[]> {
    if (this.products.length) {
      return of(this.products);
    } else {
      return this.load();
    }
  }

  get(id: number) {
    return this.products[id];
  }

  add(product: Product) {
    product.id = this.products.length + 1;
    this.products.push(product);

    return this.httpClient
      .post<Product>('https://dummyjson.com/products/add', product)
      .pipe(
        map((response: Product) => {
          fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title: response.title,
              price: response.price,
              brand: response.brand,
              category: response.category,
              thumbnail: response.thumbnail,
              description: response.description,
              rating: response. rating
            }),
          })
            .then((res) => res.json())
            .then(console.log);
        })
      );
  }

  update(id: number, product: Product) {
    this.products[id] = product;

    //Za update metodu je dodat (id+1) kako server-side id pocinje od nule, a moj (lokalni) kod pocinje od 1
    return this.httpClient
      .patch<Product>('https://dummyjson.com/products/' + (id + 1), product)
      .pipe(
        map((response: Product) => {
          fetch('https://dummyjson.com/products/' + (id + 1), {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title: response.title,
              price: response.price,
              brand: response.brand,
              category: response.category,
              thumbnail: response.thumbnail,
              description: response.description,
              rating: response.rating
            }),
          })
            .then((res) => res.json())
            .then(console.log);
        })
      );
  }

  delete(id: number) {
    const deleteUrl = 'https://dummyjson.com/products/' + id;
    const indexToRemove = this.products.indexOf(this.products[id]) - 1;
    this.products.splice(indexToRemove, 1);

    // console.log(this.products.splice((--id),1));
    // this.products.splice((--id), 1);

    return this.httpClient.delete(deleteUrl).subscribe(() => {
      fetch(deleteUrl, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then(console.log);
    });
  }
}
