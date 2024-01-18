import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map, of } from 'rxjs';
import { Article } from '../article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  private baseUrl = 'http://localhost:3000/api/articles/';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(this.baseUrl);
  }

  changeQuantity(articleID:number, changeInQuantity:number):Observable<Article|null> {
    const patchData = {quantityInCart : changeInQuantity}
    const url = `${this.baseUrl}/${articleID}`;

    return this.http.patch<Article>(url, patchData)
    .pipe(
      catchError(error => {
        console.log('Error en la solicitud:', error);
        return of(null);
      })
    );
  }

  create(article:Article):Observable<any>{
   return this.http.post<Article>(this.baseUrl, {...article})
  }

  searchArticle(name:string): Observable<Article[]>{
    const API = `http://localhost:3000/api/articles?q=${name}`;
    return this.http.get<Article[]>(API)
    .pipe(
      map((res:Article[])=> res),
      catchError(() => EMPTY)
    );
  }
}
