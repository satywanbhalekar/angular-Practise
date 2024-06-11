// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';


// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {
//   private url = 'http://localhost:30001/mens';
 

//   constructor(private httpClient: HttpClient) { }

//   getPosts() {
//     return this.httpClient.get(this.url);
//   }

//   deletePost(postId: string) {
//     const deleteUrl = `${this.url}/${postId}`; // Construct the URL for deleting a specific post
//     return this.httpClient.delete(deleteUrl);
//   }

//   createPost(newPost: any) {
//     return this.httpClient.post(this.url, newPost);
//   }

//   updatePost(postId: string, updatedPost: any) {
//     const updateUrl = `${this.url}/${postId}`; // Construct the URL for updating a specific post
//     return this.httpClient.put(updateUrl, updatedPost);
//   }

  


// }
// // http://jsonplaceholder.typicode.com/posts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://localhost:30001/mens';

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url).pipe(
      catchError(this.handleError<any[]>('getPosts', []))
    );
  }

  deletePost(postId: string): Observable<any> {
    const deleteUrl = `${this.url}/${postId}`;
    return this.httpClient.delete<any>(deleteUrl).pipe(
      catchError(this.handleError<any>('deletePost'))
    );
  }

  createPost(newPost: any): Observable<any> {
    return this.httpClient.post<any>(this.url, newPost).pipe(
      catchError(this.handleError<any>('createPost'))
    );
  }

  updatePost(postId: string, updatedPost: any): Observable<any> {
    const updateUrl = `${this.url}/${postId}`;
    return this.httpClient.patch<any>(updateUrl, updatedPost).pipe(
      catchError(this.handleError<any>('updatePost'))
    );
  }

  getPostById(postId: string): Observable<any> {
    const getUrl = `${this.url}/${postId}`;
    return this.httpClient.get<any>(getUrl).pipe(
      catchError(this.handleError<any>('getPostById'))
    );
  }
  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
