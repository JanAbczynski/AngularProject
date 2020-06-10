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
  // url = 'https://localhost:5001/api/commands';

  posters = [
    { name: "john" },
    { name: "jim" }
  ]

  // constructor(private http: HttpClient, private postService: PostService) {
  constructor(private postService: PostService) {
    this.getPosts()
  }

  getPosts(){
    this.postService.getPosts().subscribe(
      posts => 
        {console.log("posts"); this.posts = posts}, 
      (error: Response) => {
        if(error.status === 500){
          alert("error 500");
        } else {
          alert("Can not load because of something...");
        console.log("ERROR unxpected");        
        }
      })
  }

  deletePost(post){
    

    this.postService.deletePost(post.id)
    .subscribe(
      val => 
      {
        console.log("DELETED");
        this.getPosts();
      }, 
      (error: Response) => {
        if(error.status === 404){
          alert("Already deleted");
        } else {
          alert("ERROR unxpected");
        console.log("ERROR unxpected");        
        }

      });
  }

  patchPost(post){

    this.postService.patchPost(post.id)
    .subscribe(val => 
      {
        console.log("PATCHED");
        this.getPosts()
      }, error => {
        alert("ERROR on delete");
        console.log("ERROR console");
      });

  }

  updatePost(post){

    this.postService.updatePost(post.id)
    .subscribe(
      val => 
      {
        console.log("PUT call successful value returned in body", val);
        this.getPosts()
      }, 
      error => {
        alert("ERROR on delete");
        console.log("ERROR console");
      });    
  }

  delPosts(postId: number){
    console.log("del")
    console.log(postId)
  }

  createNewPost(titleInput: HTMLInputElement) {


    this.postService.createNewPost(titleInput)
    .subscribe(
    response => {
      this.getPosts();
    }, 
    (error: Response) => {
      if(error.status === 400){
        alert("error 400")
      } else {
        alert("ERROR on delete");
        console.log("ERROR console");        
      }

    });

  }



  ngOnInit() {
    console.log("OnInit")
  }


  ngOnChange(){
    
    console.log("on Change")
  }
    
}
