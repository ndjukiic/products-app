import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'https://dummyjson.com/products';
  private products: any[] = [];

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

  get(id: number) {}

  add(product: any) {}

  update(id: number, product: any) {}

  delete(id: number) {
    this.products.splice(id, 1);
  }
}
