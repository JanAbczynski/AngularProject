import { ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post'
// import 'rxjs/add/operator/catch';


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



  deletePost(id){
    console.log("delete: ", this.url +"/"+ id)
    return this.http.delete(this.url + "/" + id);
    
  }

  patchPost(id){
    var myNewPost = 
    {
    Id: null,
    HowTo: "newXXXXXXX",
    Line: "newXXXXXXXXX",
    Platform: "newPlatform"
    } 

    return this.http.patch(this.url + "/" + id, myNewPost)
  }


  updatePost(id){

    var myNewPost = 
    {
    Id: null,
    HowTo: "newXX",
    Line: "newXX",
    Platform: "newPlatform" 
    }   

    return this.http.put(this.url + "/" + id, myNewPost)
  }

  createNewPost(titleInput: HTMLInputElement){

    let myNewPost = 
    {
    Id: null,
    HowTo: titleInput.value,
    Line: "new line",
    Platform: "newPlatform"
  
  }

    return this.http.post<Post>(this.url, myNewPost)
  }
}
