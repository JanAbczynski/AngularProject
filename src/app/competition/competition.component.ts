import { Competition } from './../models/Competition';
import { UserWorkService } from './../service/user-work.service';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  competition: Competition;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userWorkService: UserWorkService
  ) { }

  getCompetition(id: string){
    this.userWorkService.getACompetitionById(id)
    .subscribe(
      competition => {
        this.competition = competition;
        console.log(competition)
      })
  }




  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log("params: ", params.id)

      this.getCompetition(params.id)
      

    })
  }

}
