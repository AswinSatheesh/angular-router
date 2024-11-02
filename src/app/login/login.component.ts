import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('username') username!: ElementRef;
  @ViewChild('password') password!: ElementRef;
  authService : AuthService = inject(AuthService);
  router : Router = inject(Router);
  OnLoginClicked(){
    // console.log(this.username.nativeElement.value);
    // console.log(this.password.nativeElement.value);
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;
    
    const user = this.authService.login(username,password);

    if(user === undefined){
      alert('Login Credentials you have entered is incorrect!!!');
    }else{
      alert('Welcome ' + user.name + '. You are logged in.');
      this.router.navigate(['\Courses']);
    }
    
  }
}
