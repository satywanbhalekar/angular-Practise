import { Component } from '@angular/core';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private postService: PostService) { }

  save(newForm: any) {
    if (newForm.valid) { // Check if the form is valid
      console.log(newForm.value); // Log the form data to the console

      // Call your API service to save the form data
      this.postService.createPost(newForm.value).subscribe(
        (response: any) => {
          console.log('Form data saved successfully:', response);
          // Optionally, you can perform additional actions after saving data
        },
        (error: any) => {
          console.error('Error saving form data:', error);
          // Handle error if needed
        }
      );
    } else {
      console.log('Form is invalid.'); // Log a message if the form is invalid
    }
  }
}
