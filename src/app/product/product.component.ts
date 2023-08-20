import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Ürün Listesi"
  products: any[]=[
    { id: 1, name: "Laptop", price: 25000, categoryID: 1, description: "HP" },
    { id: 2, name: "Mouse", price: 250, categoryID : 2, description : "Everest" }
  ];
  
ngOnInit(): void {
}

}
