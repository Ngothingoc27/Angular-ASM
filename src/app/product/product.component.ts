import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { TypeProduct } from './product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
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
