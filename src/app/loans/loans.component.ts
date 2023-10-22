import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent {
  // loanform!: FormGroup;
  loanForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loanForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      // Add form controls for other fields here
      bankStatement: ['']
    });
  }

  onSubmit() {
    if (this.loanForm.valid) {
      // Process the form data here (e.g., send it to a backend API)
      console.log(this.loanForm.value);
      // Reset the form after submission if needed
      this.loanForm.reset();
    } else {
      // Handle form validation errors
      alert('Please fill in all required fields.');
    }
  }
}
