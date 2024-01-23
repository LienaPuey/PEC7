import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({});

  public message: string= '';
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router){
    this.createForm();
  }

  createForm(){
    this.registerForm = this.fb.group({
      username: ["",[Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  register(){
    if(this.registerForm.valid){
      let formData = this.registerForm.value;
      const username= formData.username;

      this.userService.register(username)
      .subscribe((resp)=> {
        console.log("Succesfully registered", resp);
        this.message = resp.msg;
        this.router.navigate(['user/login']);
      }, (err)=> {
        console.error('Error registering', err);
      })
    }
  }
}
