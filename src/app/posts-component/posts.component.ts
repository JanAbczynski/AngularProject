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

  constructor(private postService: PostService) {
    
  }

  getPosts(){
    this.postService.getPosts().subscribe(
      posts => 
        { 
        this.posts = posts}, 
      (error: Response) => {
        if(error.status === 500){
          alert("error 500");
        } else {
          alert("Can not load because of something...");
    
        }
      })
  }

  deletePost(post){
    

    this.postService.deletePost(post.id)
    .subscribe(
      val => 
      {

        this.getPosts();
      }, 
      (error: Response) => {
        if(error.status === 404){
          alert("Already deleted");
        } else {
          alert("ERROR unxpected");      
        }

      });
  }

  patchPost(post){

    this.postService.patchPost(post.id)
    .subscribe(val => 
      {

        this.getPosts()
      }, error => {
        alert("ERROR on patch");

      });

  }

  updatePost(post){

    this.postService.updatePost(post.id)
    .subscribe(
      val => 
      {
        this.getPosts()
      }, 
      error => {
        alert("ERROR on delete");

      });    
  }

  delPosts(postId: number){
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
      }

    });

  }

  ngOnInit() {
    this.getPosts()
  }

  ngOnChange(){

  }
    
}
