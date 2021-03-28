import { TargetModel } from './../models/TargetModel';
import { UserWorkService } from './../service/user-work.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competition } from '../models/Competition';
import { FormGroup, FormBuilder, AbstractControl, FormControl, Validators, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { RunModel } from '../models/RunModel';

@Component({
  selector: 'app-competition-manager',
  templateUrl: './competition-manager.component.html',
  styleUrls: ['./competition-manager.component.css']
})
export class CompetitionManagerComponent implements OnInit {

  competition: Competition;
  createRun: FormGroup;
  createTarget: FormGroup;
  isCreatingRun = false;
  isCreatingTarget = false;
  competitionId: string;
  runs: RunModel[];
  noOfShots = 1;
  targets: TargetModel[];
  targetsX = [1, 3, 4];

  constructor(
    private activatedRoute: ActivatedRoute,
    private userWorkService: UserWorkService
  ) {

    this.createRun = new FormGroup ({
      description: new FormControl(null, Validators.required),
      noOfShots: new FormControl(null, Validators.required),
      target: new FormControl(null, Validators.required)
    })

    this.createTarget = new FormGroup ({
      targetName: new FormControl(null, Validators.required),
      sizeX: new FormControl(null, Validators.required),
      sizeY: new FormControl(null, Validators.required),
      possibleShots: new FormControl(null, Validators.required),
      noOfShots: new FormControl(null, Validators.required),
      target: new FormControl("ggg", Validators.required)
    })

  }


  ActivateRunForm(){
    if(!this.isCreatingRun){
    this.isCreatingRun = true;
    this.FetchTargets();
    }else{
      this.isCreatingRun = false;
    }

  }

  DeleteRun(runId: String){
    console.log("runId")
    console.log(runId)
  }

  getCompetition(){
    this.userWorkService.getACompetitionById(this.competitionId)
    .subscribe(
      competition => {
        this.competition = competition;
        // console.log(competition)
        this.getRunsForCompetition()
      })
  }


  getRunsForCompetition(){
    this.userWorkService.getRunsForCompetition(this.competitionId)
    .subscribe(
      runs => {
        this.runs = runs;
        // console.log(this.runs)
      })
  }

  onSubmitRun(){
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
    this.getRunsForCompetition()

  }

  onSubmitTarget(){
    console.log(this.createTarget)

  }

  AddRun(run: RunModel){
    this.userWorkService.addRun(run)
    .subscribe(
      res => {
        console.log("com: ", res)
      })
  }

  AddShot(){
    this.noOfShots ++;
  }

  SelectTarget(val: string){
    console.log(val)

    this.createRun.patchValue({target: val})
  }

  ngOnInit() {
    console.log("init")
    this.activatedRoute.params.subscribe(params => {
      this.competitionId = params.id;
      this.GetRunsForCompetition(params.id)
      console.log(this.competitionId)
      }
    )
  }

  GetRunsForCompetition(competitionId: string){
    this.userWorkService.getRunsForCompetition(competitionId)
    .subscribe(runs =>
      {
        console.log("runs")
        console.log(runs)
        this.runs = runs;
        console.log(this.runs)
      })
  }
  FetchTargets() {
    var body = {"token": localStorage.getItem("token")}
    this.userWorkService.GetTargets(body)
    .subscribe(t =>
      {
        this.targets = t
        console.log(this.targets)
      }
    )
  }
}


