import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/IProduct';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public isLoading = true;
  public isError = false;

  bestProducts: IProduct[];

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.isLoading = true;
    this.productService.getProduct()
      .subscribe(data => {
        console.log('best Products are : component', data);
        this.bestProducts = data
        this.isLoading = false;
      }, err => {
        this.isLoading = false;
        this.isError = true;
      });
  }


}
