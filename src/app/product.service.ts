
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
    API: string = ' http://localhost:3000/product';
    //product: TypeProduct[] = Product;

  constructor( private http: HttpClient ) {}
  getProduct(): Observable<any[]> {
    return this.http.get<any[]>(this.API);
  }

  get(id: any): Observable<any> {
    return this.http.get<any>(`${this.API}/${id}`);
  }
  
  addProduct(item: any): Observable<any> {
    return this.http.post<any>(this.API, item);
  }

  removeProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`);
  }

  updateProduct(item: any): Observable<any> {
    return this.http.put<any>(`${this.API}/${item.id}`, item);
  }
}