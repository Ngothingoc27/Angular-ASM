import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-app-product',
  templateUrl: './app-product.component.html',
  styleUrls: ['./app-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: any = {
    id: 0,
    name: '',
    price: 0,
    image : '',
    description: ""
  };

  constructor(
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  onAddProduct() {
    this.productService.addProduct(this.product).subscribe(data => {
      this.router.navigateByUrl('/admin/product');
    });
  }

}
