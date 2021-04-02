import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserWorkService } from '../service/user-work.service';

@Component({
  selector: 'app-run-manager',
  templateUrl: './run-manager.component.html',
  styleUrls: ['./run-manager.component.css']
})
export class RunManagerComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private UserWorkService: UserWorkService
  ) { }

  ngOnInit() {
    console.log("run component")
    this.activatedRoute.params.subscribe(params => {
      this.GetUsersForRun(params.id);
      console.log(params.id)
      })
  }

GetUsersForRun(runId: string) {
  this.UserWorkService.GetRegistredUsersByRunId(runId).subscribe(
    users => {
      console.log(users)
    }
  )
}

}


