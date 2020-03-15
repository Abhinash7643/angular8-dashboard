import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestProductComponent } from './best-product/best-product.component';
import { RouterModule } from '@angular/router';
import { ProductService } from '../shared/service/product.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [BestProductComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule

  ],
  providers:[
    ProductService
  ],
  exports:[
   BestProductComponent
  ]
})
export class ProductModule { }
