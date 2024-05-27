import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private authUrl = 'http://localhost:30001/api/auth/signin';

  constructor(private httpClient: HttpClient) { }

  authenticateUser(credentials: { username: string, password: string }) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<any>(this.authUrl, credentials, httpOptions)
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.token);
        }),
        catchError(error => {
          return throwError(error);
        })
      );
  }

  // New method to get token from local storage
  getToken(): string | null {
   
    return localStorage.getItem('token');
   
  }
 
  
}
