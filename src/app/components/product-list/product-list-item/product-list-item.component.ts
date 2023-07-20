import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css'],
})
export class ProductListItemComponent implements OnInit {
  @Input() singleProduct: any;
  @Input() index!: number;
  @Input() imageUrl!: string;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  rutaView() {
    this.router.navigate([this.index]);
  }

  rutaEdit() {
    this.router.navigate(['/edit' + '/' + this.index]);
  }

  onDelete() {
    this.productService.delete(this.index);
  }
}
