import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css'],
})
export class ProductListItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  rutaView() {
    this.router.navigate([this.product.id - 1]);
  }

  rutaEdit() {
    this.router.navigate(['/edit' + '/' + (this.product.id - 1)]);
  }

  onDelete() {
    this.productService.delete(this.product.id); //BUG
  }
}
