import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http : HttpClient) { }


  getUserList(): Observable<[]> {
    return this.http.get<[]>(this.url);
  }
}
