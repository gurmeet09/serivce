import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router'; 
import { Productservice } from '../app.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data1: any = [];
  username;
  constructor(private activatedRoute:ActivatedRoute, private service:Productservice,  public router:Router) {  }
   products:any = [
    {
      "productImage":"",
      "productName":"Jiofi",
      "price":"Rs.999"
  },
  {
      "productImage":"",
      "productName":"Mobile",
      "price":"Rs.9999"
  },
  {
      "productImage":"",
      "productName":"Laptop",
      "price":"Rs.45999"
  }
  ];
  ngOnInit() {
this.activatedRoute.params.subscribe((params: Params) => {
  this.username=params['username'];
})
  }
  productlink(event, item){
    console.log('hee',event,item)
  }
  show(productName){
    console.log('hhd',productName)
    this.router.navigate(['/productdetail/'+productName])
  }
}
