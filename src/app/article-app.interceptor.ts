import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserStoreService } from './services/user-store.service';

@Injectable()
export class ArticleAppInterceptor implements HttpInterceptor {

  constructor(private userStore: UserStoreService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this.userStore.getAuthToken();
    const authReq = authToken
    ? req.clone({setHeaders : {Authoritation : `Bearer ${authToken}`} })
    :req;
    return next.handle(authReq);
  }
}
