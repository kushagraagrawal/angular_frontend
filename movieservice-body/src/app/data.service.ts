import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './movie';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private _url: string = "http://localhost:8081/movie";
  constructor(private http: HttpClient) { }


  getMovies(): Observable<IMovie[]>{
    console.log(this.http.get<IMovie[]>(this._url));
    return this.http.get<IMovie[]>(this._url).pipe(catchError(err => {
      console.log(err.error);
      return throwError(err.error)
    }));
  }
  postMovies(movie: IMovie): Observable<IMovie>{
    return this.http.post<IMovie>(this._url, movie, httpOptions)
      .pipe(
        catchError(err => {
          console.log(err.error);
          return throwError(err.error)
        }));
  }
  deleteMovie(id: string): Observable<{}>{ 
    const url = `${this._url}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(err => {
          console.log(err.error);
          return throwError(err.error)
        })
      );
  }
}
