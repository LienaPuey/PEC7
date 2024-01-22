import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private isAuthenticated : boolean = false;
  private authToken: string | null = null;
  private redirectUrl: string | null =null;
  constructor() { }

  setAuthenticated(isAuthenticated:boolean):void {
    this.isAuthenticated = isAuthenticated;
  }

  getAuthenticated():boolean{
    return this.isAuthenticated;
  }

  setAuthToken(token: string| null):void {
    this.authToken = token;
  }

  getAuthToken():string | null{
    return this.authToken;
  }

  getRedirectUrl():string |null {
    return this.redirectUrl;
  }

  setRedirectUrl(url:string | null):void {
    this.redirectUrl = url;
  }
}
