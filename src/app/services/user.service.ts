import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { 

  }

  register(username:string): Observable<any> {
    const registerUrl = `${this.baseUrl}/user/register`;
    const password = 'SECRET'
    return this.http.post(registerUrl, {username:username, password:password});
  }

  login(username:string, password:string): Observable<any>{
    const loginUrl = `${this.baseUrl}/user/login`;

    return this.http.post(loginUrl, {username, password}).pipe(
      catchError(error=>{
        throw new Error('Error en el inicio de sesión');
      })
    )
  }


}
