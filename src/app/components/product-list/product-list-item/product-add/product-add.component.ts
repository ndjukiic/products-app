import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit{

  reactiveForm!: FormGroup;

  constructor(private productService: ProductService, private router: Router){}

  onFormSubmit(){
    this.productService.add(this.reactiveForm);
    this.router.navigate(['../']);
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      'name': new FormControl(null),
      'price': new FormControl(null),
      'brand': new FormControl(null),
      'category': new FormControl(null)
    })
  }
}
