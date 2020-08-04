import { environment } from './../../environments/environment.prod';
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
  url = environment.apiUrl + "/commands";

  constructor(private http: HttpClient) {

  }

  getPosts(): Observable<Post[]> {
    
    let opts = {
      headers: new HttpHeaders({
      "X-Requested-With": "HttpClient"
    })   
    }
    
    console.log(opts.headers.get("X-Requested-With"))

    return this.http.get<Post[]>(this.url, opts);
  }



  deletePost(id){
    console.log("delete: ", this.url +"/"+ id)
    return this.http.delete(this.url + "/" + id);
    
  }

  // patchPost(id){
  //   var myNewPost = 
  //   {
  //   Id: null,
  //   HowTo: "newXXXXXXX",
  //   Line: "newXXXXXXXXX",
  //   Platform: "newPlatform"
  //   } 
  //   return this.http.patch(this.url + "/" + id, {HowTo: "newXXXXXXX"})
  // }

  // PATCH one of the heroes' name
  patchPost (id: number): Observable<{}> {
  const url = `${this.url}/${id}`;   // PATCH api/heroes/42
   return this.http.patch(url, 
    [
      {
        "op": "replace",
        "path": "/Howto",
        "value": "some new value"
      }
    ]
  );

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
