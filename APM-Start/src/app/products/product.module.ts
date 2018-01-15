import { ProductGuardService } from './product-guard.service';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductsDetailComponent } from './products-detail.component';
import { ConvertToSpacesPipe } from '../shared/conver-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([      
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
      canActivate:[ ProductGuardService ],
      component: ProductsDetailComponent },]),
    SharedModule
  ],
  declarations: [
    ProductListComponent, 
    ProductsDetailComponent,
    ConvertToSpacesPipe

  ],
  providers: [
    ProductService,
    ProductGuardService
  ]

})
export class ProductModule { }
