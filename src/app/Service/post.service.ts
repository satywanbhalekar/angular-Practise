import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://localhost:30001/mens';
 

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(this.url);
  }

  deletePost(postId: string) {
    const deleteUrl = `${this.url}/${postId}`; // Construct the URL for deleting a specific post
    return this.httpClient.delete(deleteUrl);
  }

  createPost(newPost: any) {
    return this.httpClient.post(this.url, newPost);
  }

}
// http://jsonplaceholder.typicode.com/posts