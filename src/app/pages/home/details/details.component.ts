import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
id:number;
state:product;
  constructor(private ar:ActivatedRoute,private ps:ProductService) {
    this.ar.params.subscribe(
       params =>
       {
         this.id=params["id"];
         this.state = this.ps.getProduct(this.id);
       }
    )
  }

  ngOnInit(): void {
  }

}
