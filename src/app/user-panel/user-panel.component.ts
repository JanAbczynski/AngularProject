import { Competition } from './../models/Competition';
import { UserWorkService } from './../service/user-work.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  competitions: Competition[];

  constructor(
    private userWorkService: UserWorkService
  ) { }

  addCompetition(competition: Competition){
    this.userWorkService.addCompetition(competition)
    .subscribe(
      res => {
      })
  }

  SortBy(property: string){
    switch(property){
      case("description"):
        this.competitions.sort((a,b) => (a.description > b.description) ? 1 : -1)
        break;
      case("location"):
        this.competitions.sort((a,b) => (a.placeOf > b.placeOf) ? -1 : 1)
        break;
      case("day"):
        this.competitions.sort((a,b) => (a.startTime > b.startTime) ? -1 : 1)
        break;

    }
  }

  getAllCompetition(){
    this.userWorkService.getAllCompetition()
    .subscribe(
      competitions => {
        this.competitions = competitions;
        this.competitions.sort((a,b) => (a.description > b.description) ? -1 : 1)
      })
  }

  ngOnInit() {
    this.getAllCompetition()
  }

}
