import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})


export class BookService {
  private bookApi : string = "http://localhost:3000/books";
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any>{
    let requestUrl = this.bookApi+ "?_expand=category&_expand=author";
    return this.http.get<any>(requestUrl);
  }

  findById(id: string): Observable<any>{
    let requestUrl = `${this.bookApi}/${id}?_expand=category&_expand=author`;
    return this.http.get<any>(requestUrl);
  }
}
