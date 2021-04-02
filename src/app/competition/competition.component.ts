import { RunModel } from '../models/RunModel';
import { Competition } from '../models/Competition';
import { UserWorkService } from '../service/user-work.service';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  competition: Competition;
  createRun: FormGroup;
  isCreatingRun = false;
  competitionId: string;
  runs: RunModel[];
  buttonId = "";
  buttonMessage = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private userWorkService: UserWorkService
  )
  {
    this.createRun = new FormGroup ({
      description: new FormControl(null, Validators.required),
      target: new FormControl(null, Validators.required),
      noOfShots: new FormControl(null, Validators.required)
    })
  }

  ActivateRunForm(){
    this.isCreatingRun = true;
  }

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

  SignIn(runId: string){
    var run = new RunModel();
    run.Id = runId
    console.log(run)
      this.userWorkService.RegisterUserInRun(run)
      .subscribe(
        runs => {

        }, (error: Response) =>
        {
          if(error.status === 409)
          {
            // console.log(error.error)

            var x = JSON.parse(JSON.stringify(error)).error;
            console.log(x)
            console.log(x.id)
            console.log(x.message)
            this.buttonId = x.id;
            this.buttonMessage = x.message;
            setTimeout(()=>{
              this.buttonId = "";
            }, 3000)
          }
        }

        )
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
