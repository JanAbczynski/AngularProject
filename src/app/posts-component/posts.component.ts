import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

posts: any;

posters = [
  {name: "john"},
  {name: "jim"}
]

  constructor(http: HttpClient) { 

    http.get('http://jsonplaceholder.typicode.com/posts').subscribe(response => {

    console.log(response);

    this.posts = response;
    })

    console.log(this.posters)


  }




  ngOnInit() {
  }

}
