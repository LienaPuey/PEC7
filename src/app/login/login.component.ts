import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm : FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private userService: UserService, private router : Router){
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
      this.router.navigate(['articles/list']);
      }, (err)=> {
        console.error('Error login', err);
      })
    }
  }
}
