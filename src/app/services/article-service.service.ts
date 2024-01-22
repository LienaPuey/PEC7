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

  getArticle(id:string): Observable<Article>{
    return this.http.get<Article>(this.baseUrl + id);
  }
  
  changeQuantity(articleID:number, changeInQuantity:number):Observable<any> {
    return this.http.patch(this.baseUrl+ articleID, {changeInQuantity: changeInQuantity});
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
