import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  products: any[] = [];
  validForm = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProduct().subscribe(data => {
      this.products = data;
    });
  }
  onHandleRemove(id: number) {
    this.productService.removeProduct(id).subscribe(data => {
      this.products = this.products.filter(item => item.id != data.id);
    });
  }

}
