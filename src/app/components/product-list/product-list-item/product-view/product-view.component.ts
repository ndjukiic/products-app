import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit, OnDestroy {
  products: any[] = [];
  index!: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.products = this.productService.list();
    this.index = this.route.snapshot.paramMap.get('id');
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
