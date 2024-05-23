import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Service/post.service';
import { Router } from '@angular/router';

// Import the PostService

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  public posts: any; // Assuming posts is an array of any type

  constructor(private post: PostService ,private router: Router) { }

  ngOnInit() {
    this.post.getPosts().subscribe((response) => {
      this.posts = response; // Assign the posts array to this.posts
      console.log(this.posts);
    });
  }

  deletePost(postId: string) {
    // Call your API service to delete the post
    this.post.deletePost(postId).subscribe(() => {
      // Remove the deleted post from the local array
      this.posts = this.posts.filter((post: { _id: string; }) => post._id !== postId);
    });
  }


  

}
