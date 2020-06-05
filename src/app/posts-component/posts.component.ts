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
  }

}
