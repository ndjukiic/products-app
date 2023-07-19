import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListItemComponent } from './components/product-list/product-list-item/product-list-item.component';
import { ProductAddComponent } from './components/product-list/product-list-item/product-add/product-add.component';
import { ProductViewComponent } from './components/product-list/product-list-item/product-view/product-view.component';
import { ProductEditComponent } from './components/product-list/product-list-item/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductListItemComponent,
    ProductAddComponent,
    ProductViewComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
