import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  index!: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.productService.list().subscribe((recievedData) => {
      this.products[this.index] = recievedData[this.index];
    });
    this.index = +this.route.snapshot.paramMap.get('id');
    console.log(self);
  }

  ngOnDestroy(): void {}

  onEdit() {
    this.router.navigate(['/edit' + '/' + this.index]);
  }

  onDelete() {
    this.productService.delete(this.index);
    this.router.navigate(['../']);
  }
}
