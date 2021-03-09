import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserWorkService } from '../service/user-work.service';
import { Competition } from '../models/Competition';
import { FormGroup } from '@angular/forms';
import { RunModel } from '../models/RunModel';

@Component({
  selector: 'app-competition-manager',
  templateUrl: './competition-manager.component.html',
  styleUrls: ['./competition-manager.component.css']
})
export class CompetitionManagerComponent implements OnInit {

  competition: Competition;
  createRun: FormGroup;
  isCreatingRun = false;
  competitionId: string;
  runs: RunModel[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private userWorkService: UserWorkService
  ) { }

  getCompetition(){
    this.userWorkService.getACompetitionById(this.competitionId)
    .subscribe(
      competition => {
        this.competition = competition;
        console.log(competition)
        this.getRunsForCompetition()
      })
  }

  
  getRunsForCompetition(){
    this.userWorkService.getRunsForCompetition(this.competitionId)
    .subscribe(
      runs => {
        this.runs = runs;
        console.log(this.runs)
      })
  }
  
  onSubmit(){
    var run: RunModel;
    run = {
      Id: null,
      competitionId: this.competitionId,
      description: this.createRun.controls.description.value,
      target: this.createRun.controls.target.value,
      noOfShots: this.createRun.controls.noOfShots.value
    }

    this.AddRun(run);
    this.isCreatingRun = false;
    this.ngOnInit();
  }

  AddRun(run: RunModel){
    this.userWorkService.addRun(run)
    .subscribe(
      res => {
        console.log("com: ", res)
      })
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {

      this.competitionId = params.id;
      this.getCompetition();
      
    })
  }

}
