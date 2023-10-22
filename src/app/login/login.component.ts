import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/userservice/user.service';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  loginForm!: FormGroup<any>;
  title: any = '';
  constructor(private fb : FormBuilder, private user : UserService, private dialog : MatDialogRef<HeaderComponent>) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }  
  onSubmit() {
  if (this.loginForm.valid) {
    let payload = {
     email : this.loginForm.value.email,
     password : this.loginForm.value.password
    };
    this.user.login(payload).subscribe((response: HttpResponse<any>) =>
    {
      console.log(response.headers)
      const token = response.headers.get('Authorization');
      const contentType = response.headers.get('Content-Type');
      console.log('Authorization Header: ', token);
      console.log('Content-type Header: ', contentType);
      console.log('Response Body: ', response.body);
      this.dialog.close();
    })
    // this.user.login(payload).then((response: any) =>
    // {
    //   console.log('Login Successfull', response.email, response.password);
    // })
    // .catch((error: any) => {
    //   console.error('Login error', error);
    // });
    //  let loginResponse = this.user.login(payload)
    //  console.log(loginResponse.body.email, loginResponse.body.password);

    // this.user.login(payload).subscribe((response: HttpResponse<any>) => {

    // })
  }

  }
}