import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  id!: number;
  editMode = false;
  productEditForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      if (this.router.url.includes('/edit') && params['id'] != null) { //ako se u linku nalaze /edit/:id, znači da smo u "edit modu"
        this.editMode = true;
      }
      this.loadProduct();
    });
  }

  onEditSubmit() {
    console.log(this.productEditForm);
    this.productService.update(this.id, this.productEditForm.value);
    this.router.navigate(['../../']);
  }

  private loadProduct() {
    let newTitle = '';
    let newPrice = 0;
    let newBrand = '';
    let newCategory = '';
    let newThumbnail = '';

    if (this.editMode) {
      const product = this.productService.get(this.id);
      newTitle = product.title;
      newPrice = product.price;
      newBrand = product.brand;
      newCategory = product.category;
      newThumbnail = product.thumbnail;
    }

    this.productEditForm = new FormGroup({
      title: new FormControl(newTitle),
      price: new FormControl(newPrice),
      brand: new FormControl(newBrand),
      category: new FormControl(newCategory),
      thumbnail: new FormControl(newThumbnail)
    });
  }
}
