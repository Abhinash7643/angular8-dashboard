import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/shared/models/IProduct';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-best-product',
  templateUrl: './best-product.component.html',
  styleUrls: ['./best-product.component.scss']
})
export class BestProductComponent implements OnInit {


  @Input() bestProduct: IProduct;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {


  }

  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
