import { PostService } from './../service/post.service';
import { async } from '@angular/core/testing';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post'
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  newPost: Observable<any>;
  test: any;

  // url = 'http://jsonplaceholder.typicode.com';
  url = 'https://localhost:5001/api/commands';

  posters = [
    { name: "john" },
    { name: "jim" }
  ]

  constructor(private http: HttpClient, private postService: PostService) {
    this.getPosts()
  }

  getPosts(){
    this.postService.getPosts().subscribe(posts => {console.log("posts"); this.posts = posts})
  }

  deletePost(post){
    console.log("delete: ", this.url +"/"+ post.id)
    this.http.delete(this.url + "/" + post.id)
    .subscribe(val => 
      {
        console.log("DELETED");
        this.getPosts();
      }, error => {
        alert("ERROR on delete");
        console.log("ERROR console");
      });
  }

  patchPost(post){

    var myNewPost = 
    {
    Id: null,
    HowTo: "newXXXXXXX",
    Line: "newXXXXXXXXX",
    Platform: "newPlatform"
    } 

    console.log("patch post: ", post)

    var fullUrl = this.url + "/" + post.id
    console.log(fullUrl)

    this.http.patch(fullUrl, myNewPost)
    .subscribe(val => 
      {
        console.log("PATCHED");
        this.getPosts()
      });

  }

  updatePost(post){
    // console.log("post: ", post.id);
    

    var myNewPost = 
    {
    // id: null,
    // userId: null,
    // title: titleInput.value,
    // body: null
  
    Id: null,
    HowTo: "newXX",
    Line: "newXX",
    Platform: "newPlatform"
  
    }   

    this.http.put(this.url + "/" + post.id, myNewPost)
    .subscribe(val => 
      {
        console.log("PUT call successful value returned in body", val);
        this.getPosts()

      });


      
  }

  delPosts(postId: number){
    console.log("del")
    console.log(postId)
  }

  createPost() {

    const data: Post = {
      // id: null,
      // userId: 223,
      // title: 'my new',
      // body: 'hello'

      Id: 4,
      HowTo: "newHowTo",
      Line: "new line",
      Platform: "newPlatform"
    }

    this.newPost = this.http.post<Post>(this.url, data).
    // this.newPost = this.http.post<Post>(this.url + '/posts', data).
      pipe(map(post => post))
    console.log('postpost' + this.newPost)
  }

  createNewPost(titleInput: HTMLInputElement) {
    let myNewPost: Post;
    myNewPost = 
      {
      // id: null,
      // userId: null,
      // title: titleInput.value,
      // body: null
    
      Id: null,
      HowTo: titleInput.value,
      Line: "new line",
      Platform: "newPlatform"
    
    }

    console.log(titleInput.value)
    console.log(myNewPost)

    // this.http.post<Post>(this.url + '/post', myNewPost)
    this.http.post<Post>(this.url, myNewPost)
    .subscribe(response => {
      this.getPosts();
    });
    // this.posts.splice(0, 0, myNewPost);
    // this.posts.push(myNewPost) 
  }



  ngOnInit() {
    console.log("OnInit")
  }


  ngOnChange(){
    
    console.log("on Change")
  }
    
}
