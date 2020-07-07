import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
// import 'rxjs/add/observable/combineLatest';


@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  
  followers = [
    { login: "John", id: "123" },
    { login: "Bob", id: "321" },
]
    constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .subscribe(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      // this.service.getAll()
      // .subscribe(followers => )

    })

    // obs.subscribe()

    // this.route.queryParamMap.
    // subscribe(params => {

    // });

    // // let page = this.route.snapshot.queryParamMap.get('page')

    // this.route.paramMap
    // .subscribe(params => {
    //   console.log(params.get('userid'))
    // })
  }

}
