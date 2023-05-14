import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public sign(payLoad: {email: string, password: string}): Observable<any> {
    return this.http.post(`${this.url}/sign`, payLoad).pipe(
      map((data) => console.log(data)),
      catchError((err) => throwError(() => err.error.message))
    );
  }
}
