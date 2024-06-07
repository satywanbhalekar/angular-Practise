import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
        catchError(error => {
          return throwError(error);
        })
      );
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  clearToken() {
    localStorage.removeItem('token');
  }
}
