import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  createProduct(productBody: Product) {
    const baseUrl = 'http://localhost:3000/products';
    return this.http.post(baseUrl, productBody);
  }
  vierwProduct(productId: Product, productBody: any) {
    const baseUrl = 'http://localhost:3000/products/' + productId;
    return this.http.get(baseUrl, productBody);
  }
  updateProduct(productId: Product) {
    const baseUrl = 'http://localhost:3000/products/' + productId;
    return this.http.get(baseUrl);
  }
  deleteProduct(productId: Product) {
    const baseUrl = 'http://localhost:3000/products/' + productId;
    return this.http.get(baseUrl);
  }
  searchCategoryProduct(categoryId: Product) {
    const baseUrl = 'http://localhost:3000/products/' + categoryId;
    return this.http.get(baseUrl);
  }
  searchDateProduct(datePeram: Product) {
    const baseUrl = 'http://localhost:3000/products/' + datePeram;
    return this.http.get(baseUrl);
  }
}
