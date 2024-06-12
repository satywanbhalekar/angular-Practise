import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/Service/post.service'; // Adjust the import path as necessary

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  postId: string | null = null;
  name: string = '';
  dob: string = '';
  country: string = '';
  score: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('id');
      if (this.postId) {
        this.loadPostDetails(this.postId);
      }
    });
  }

  loadPostDetails(postId: string) {
    this.postService.getPostById(postId).subscribe(
      (      post: { name: string; dob: string; country: string; score: number | undefined; }) => {
        this.name = post.name;
        this.dob = post.dob;
        this.country = post.country;
        this.score = post.score;
      },
      (      error: any) => {
        console.error('Failed to load post details', error);
      }
    );
  }


  updateData() {
    
    if (this.postId) {
     
      const updateBody = {
        name: this.name,
       
        dob: this.dob,
        country: this.country,
        score: this.score
      };

      this.postService.updatePost(this.postId, updateBody).subscribe(
        (        response: any) => {
          console.log('Update successful', response);
          // form.reset();
          this.router.navigate(['/']); // Navigate to the post list or another appropriate page
        },
        (        error: any) => {
          console.error('Update failed', error);
        }
      );
    }
  }
}
