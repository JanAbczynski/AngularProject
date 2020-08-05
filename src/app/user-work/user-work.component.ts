import { UserWorkService } from './../service/user-work.service';
import { Competition } from './../models/Competition';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, FormControl, Validators, AsyncValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-user-work',
  templateUrl: './user-work.component.html',
  styleUrls: ['./user-work.component.css']
})
export class UserWorkComponent implements OnInit {

  isCreatingCompetition = false  
  createCompetition: FormGroup;
  competitions : Competition[];

  constructor(
    private fb: FormBuilder,
    private userWorkService: UserWorkService) 
  { 
    this.createCompetition = new FormGroup ({
      description: new FormControl(null, Validators.required),
      startTime: new FormControl(null, Validators.required),
      dur: new FormControl(null),
      // duration: new FormControl(null, Validators.required),
      placeOf: new FormControl(null, Validators.required)
    })
  }


  ActivateCreator(){
    if(this.isCreatingCompetition){
      this.isCreatingCompetition = false
    }else{
      this.isCreatingCompetition = true
    } 
  }

  onSubmit(){
    var competition: Competition;
    console.log(this.createCompetition)
    competition = {
      Id : null,
      description: this.createCompetition.controls.description.value,
      runs: null,
      duration: this.createCompetition.controls.dur.value,
      startTime: this.createCompetition.controls.startTime.value,
      // duration: null,
      // duration: this.createCompetition.controls.duration.value,
      placeOf: this.createCompetition.controls.placeOf.value
    }

    console.log(competition)
    this.addCompetition(competition)
  }

  addCompetition(competition: Competition){
    this.userWorkService.addCompetition(competition)
    .subscribe(
      res => {
        console.log("com: ", res)
      })
  }

  getAllCompetitionForUser(){
    this.userWorkService.getAllCompetitionForUser()
    .subscribe(
      competitions => {
        this.competitions = competitions;
      })
  }

  ngOnInit() {
    this.getAllCompetitionForUser()
  }

}
