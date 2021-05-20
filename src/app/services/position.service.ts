import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) { }

  // тут нужно будет создать модель
  getPositionByIdCategory(categoryId: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.ApiUrl}/api/category/product/${categoryId}`)

  }
}
