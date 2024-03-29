import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { UserStoreService } from '../services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm : FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private userService: UserService, private router : Router, private userStore: UserStoreService){
    this.createForm();
  }

  createForm(){
    this.loginForm = this.fb.group({
      username: ["",[Validators.required]],
      password: ["", [Validators.required]]
    });
  }
  
  login(){
    if(this.loginForm.valid){
      let formData = this.loginForm.value;
      const username= formData.username;
      const password = formData.password;
      this.userService.login(username, password)
      .subscribe((resp) => {
        console.log("Succesfully logged", resp);
      this.router.navigate(['article/create']);
      }, (err)=> {
        console.error('Error login', err);
      })

      this.userStore.setAuthenticated(true);

      const redirectUrl = this.userStore.getRedirectUrl();
      if(redirectUrl){
        this.userStore.setRedirectUrl(null);
        this.router.navigateByUrl(redirectUrl);
      }else {
        this.router.navigate(['article/list'])
      }
    }
  }

}
