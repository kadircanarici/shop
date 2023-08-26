import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService) { }
  title = "Ürün Listesi"
  filterText = ""
  products: Product[] = [
    { id: 1, name: "Laptop", price: 25000, categoryID: 1, description: "HP", imageUrl: "https://thumbs.dreamstime.com/t/young-plant-growing-sunlight-89517487.jpg" },
    { id: 2, name: "Mouse", price: 250, categoryID: 2, description: "Everest", imageUrl: "https://thumbs.dreamstime.com/t/young-plant-growing-sunlight-89517487.jpg" },
    { id: 3, name: "Smartphone", price: 1500, categoryID: 1, description: "Samsung", imageUrl: "https://thumbs.dreamstime.com/t/young-plant-growing-sunlight-89517487.jpg" },
    { id: 4, name: "Keyboard", price: 150, categoryID: 2, description: "Logitech", imageUrl: "https://thumbs.dreamstime.com/t/young-plant-growing-sunlight-89517487.jpg" },
    { id: 5, name: "Tablet", price: 2000, categoryID: 1, description: "Apple", imageUrl: "https://thumbs.dreamstime.com/t/young-plant-growing-sunlight-89517487.jpg" },
    { id: 6, name: "Monitor", price: 800, categoryID: 2, description: "Dell", imageUrl: "https://thumbs.dreamstime.com/t/young-plant-growing-sunlight-89517487.jpg" },
    { id: 7, name: "Headphones", price: 100, categoryID: 3, description: "Sony", imageUrl: "https://thumbs.dreamstime.com/t/young-plant-growing-sunlight-89517487.jpg" },
    { id: 8, name: "Printer", price: 300, categoryID: 2, description: "Epson", imageUrl: "https://thumbs.dreamstime.com/t/young-plant-growing-sunlight-89517487.jpg" },
    { id: 9, name: "Camera", price: 1200, categoryID: 3, description: "Canon", imageUrl: "https://thumbs.dreamstime.com/t/young-plant-growing-sunlight-89517487.jpg" },
    { id: 10, name: "External Hard Drive", price: 150, categoryID: 2, description: "Seagate", imageUrl: "https://thumbs.dreamstime.com/t/young-plant-growing-sunlight-89517487.jpg" }
  ];

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.alertifyService.success(product.name + " Sepete eklendi")
    // alert( product.name+" Sepete eklendi")
  }

}
