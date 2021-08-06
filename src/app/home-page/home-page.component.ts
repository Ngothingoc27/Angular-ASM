import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products: any[] = [];
  validForm = false;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    this.productService.getProduct().subscribe(data => {
      this.products = data;
    });
  }

}
