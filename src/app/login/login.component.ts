import { Component } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  getEmail:any = ""
  getpassword:any = ""
  constructor(private router: Router) {
  }
  ngOnInIt(){
  }
  emailFormControl = new FormControl('',[Validators.email,Validators.required]);
  passwordFormControl = new FormControl('',[Validators.required,Validators.pattern(/(?=.*[a-z])(?=)(?=.*[@$!%*#?&^_-](?=.*[0-9]))/
  )])
  matches = new ErrorStateMatcher()
  submit(email:any,passowrd:any){
    if(this.emailFormControl.valid && this.passwordFormControl.valid){
      this.getEmail = email;
      this.getpassword = passowrd;
      this.router.navigate(['dashboard/mydashboard'])
    }
    else{
      if(email == "" && passowrd == ""){
        alert("please enter password and mail id")
      }
      else if(email == ""){
        alert("please enter email id")
      }
      else if(passowrd == ""){
        alert("please enter passaword")
      }
      else{
        alert("please enter correct login details")
      this.router.navigate(['login']);
      }
    }
    this.reset();
  }
  reset(){
    this.emailFormControl.reset()
    this.passwordFormControl.reset()
  }
}
