import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  @Input() current:product;
  constructor() { }

  ngOnInit(): void {
  }

}
