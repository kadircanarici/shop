import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/categories";

  getCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(this.path).pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  handleError(err: HttpErrorResponse) {
    let errorMesage = ""
    if (err.error instanceof ErrorEvent) {
      errorMesage = "Bir hata oluştu " + err.error.message
    } else {
      errorMesage = "Sistemsel bir hata "
    }
    return throwError(errorMesage);
  }
}
