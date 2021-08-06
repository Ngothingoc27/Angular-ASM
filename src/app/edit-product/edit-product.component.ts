import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: any = {
    id: 0,
    name: '',
    price: 0,
    description: ""
  };

  constructor(
    private productServices: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.activatedRoute.params.subscribe(params => {
      this.productServices.get(params.id).subscribe(data => {
        this.product = data;
      });
    });
  }
  onUpdateProduct() {
    this.productServices.updateProduct(this.product).subscribe(data => {
      this.router.navigateByUrl('/admin/product');
    });
  }

}
