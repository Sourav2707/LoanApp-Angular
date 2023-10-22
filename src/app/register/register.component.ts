import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/userservice/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent {
regForm!: FormGroup<any>;
constructor(private fb : FormBuilder, private user : UserService) {
  this.regForm = this.fb.group({
      name: ['', Validators.required],
      phNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
  });
}
onSubmit() {
  if (this.regForm.valid) {
    let payload = {
      userName: this.regForm.value.name,
      phoneNo: this.regForm.value.phNo,
      email: this.regForm.value.email,
      password: this.regForm.value.password
    };
    this.user.register(payload).subscribe((response: any) =>
    console.log(response.headers.body));
  }
}
}
