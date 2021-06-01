import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.ApiUrl}/api/category/`)
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${environment.ApiUrl}/api/category/${id}`)
  }

  addCategory(category: Category): Observable<void> {
    return this.http.post<void>(`${environment.ApiUrl}/api/category/`, category)
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.ApiUrl}/api/category/${id}`)
  }

  editCategory(id: number, categoryModel: Category): Observable<void> {
    var category = {
      categoryId: id,
      categoryName: categoryModel.categoryName
    }
    return this.http.patch<void>(`${environment.ApiUrl}/api/category/`, category)
  }

  getProductByIdCategory(categoryId: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.ApiUrl}/api/category/product/${categoryId}`)
  }
}