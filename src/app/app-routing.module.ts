import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductResolver } from './resolvers/product.resolver';
import { ProductListItemComponent } from './components/product-list/product-list-item/product-list-item.component';
import { ProductViewComponent } from './components/product-list/product-list-item/product-view/product-view.component';
import { ProductAddComponent } from './components/product-list/product-list-item/product-add/product-add.component';
import { ProductEditComponent } from './components/product-list/product-list-item/product-edit/product-edit.component';

const routes: Routes = [

  {
    path: '',
    component: ProductListComponent,
    resolve: {
      routeResolver: ProductResolver
    },
  },
  {
    path: 'new', component: ProductAddComponent
  },
  {
    path: 'edit/:id', component: ProductEditComponent
  },
  {
    path:':id', component: ProductViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
