import { Component, OnInit } from '@angular/core';
import { UserStoreService } from './services/user-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecommerce';
  constructor(private userStore: UserStoreService){
  }

  ngOnInit(): void {
    const authToken = localStorage.getItem('auth_token');

    if(authToken){
      this.userStore.setAuthenticated(true);
    }
  }
}
