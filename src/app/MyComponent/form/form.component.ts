import { Component  } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import Validators from @angular/forms

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  // Define a form group
  // myForm: FormGroup;

  // constructor(private formBuilder: FormBuilder) {
  //   // Initialize the form group with form controls and their validators
  //   this.myForm = this.formBuilder.group({
  //     name: ['', [Validators.required, Validators.minLength(3)]], // Name field with required validator
  //     email: ['', [Validators.required, Validators.email]], // Email field with required and email validators
  //     age: ['', Validators.required] // Age field with required validator
  //   });
  // }

  // Method to handle form submission

    save(formData:any){
      console.log(formData.value)
    }
    
}
