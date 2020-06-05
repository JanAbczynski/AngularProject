import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // private url = 'http://jsonplaceholder.typicode.com';
  url = 'https://localhost:5001/api/commands';

  constructor(private http: HttpClient) {

  }

  getPosts(): Observable<Post[]> {
    
    let params = new HttpParams().set('userId', '1');
    let headers = new HttpHeaders().set('Authorization', 'auth-token');

    // var xxx = this.http.get<Post[]>(this.url + '/posts');
    // var xxx = this.http.get<Post[]>(this.url + '/posts', { params, headers });
    // console.log(xxx)
    //  return xxx
    return this.http.get<Post[]>(this.url);
  }
}
