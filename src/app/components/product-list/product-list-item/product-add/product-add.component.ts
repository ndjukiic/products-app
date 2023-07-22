import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  reactiveForm!: FormGroup;

  constructor(private productService: ProductService, private router: Router) {}

  onFormSubmit() {
    if (this.reactiveForm.valid) {
      this.productService.add(this.reactiveForm.value).subscribe();
      this.reactiveForm.reset();
      this.router.navigate(['../']);
    }
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      brand: new FormControl(null),
      category: new FormControl(null),
      description: new FormControl(null),
      rating: new FormControl(null),
      thumbnail: new FormControl(null)
    });
  }
}
