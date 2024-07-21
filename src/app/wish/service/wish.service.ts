import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    if (err.status === 0) {
      console.log('Client-side error:', err.error);
    } else {
      console.log('Server-side error:', err.error);
    }
    return throwError(() => new Error('Cannot Retrieve wishes, Please Try Again Later'));
  }
  getWishes() {
    return this.http.get('/assets/wishes.json').pipe(catchError(this.handleError));
  }
}
