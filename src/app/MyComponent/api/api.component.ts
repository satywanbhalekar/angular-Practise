import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Service/post.service';
// Import the PostService

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  public posts: any; // Assuming posts is an array of any type

  constructor(private post: PostService) { }

  ngOnInit() {
    this.post.getPosts().subscribe((response) => {
      this.posts = response; // Assign the posts array to this.posts
      console.log(this.posts);
    });
  }
}
