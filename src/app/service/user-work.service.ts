import { TargetModel } from './../models/TargetModel';
import { RunModel } from './../models/RunModel';
import { Competition } from './../models/Competition';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserWorkService {

  url = environment.apiUrl + "/competition";

  constructor(
    private http: HttpClient,
  ) { }

  public addCompetition (competition: Competition){
    var fullUrl = this.url + "/AddCompetition";
    return this.http.post(fullUrl, competition);
  }

  public addRun (run: RunModel){
    var fullUrl = this.url + "/addRun";
    return this.http.post(fullUrl, run);
  }

  getAllCompetitionForUser(): Observable<Competition[]> {
    let opts = {
      headers: new HttpHeaders({
      "X-Requested-With": "HttpClient"
      })
    }
    var fullUrl = this.url + "/GetAllCompetitionForUser";
    return this.http.get<Competition[]>(fullUrl, opts);
  }

  getAllCompetition(): Observable<Competition[]> {


    var fullUrl = this.url + "/GetAllCompetition";
    return this.http.get<Competition[]>(fullUrl);
  }


  getACompetitionById(id: string): Observable<Competition> {

    let opts = {
      headers: new HttpHeaders({
      "X-Requested-With": "HttpClient"
    })
    }
    var fullUrl = this.url + "/GetCompetitionById/" + id;
    return this.http.get<Competition>(fullUrl, opts);
  }

  getRunsForCompetition(competitionId: string): Observable<RunModel[]> {
    let opts = {
      headers: new HttpHeaders({
      "X-Requested-With": "HttpClient"
      })
    }
    var fullUrl = this.url + "/GetRunByCompetitionId/" + competitionId;
    return this.http.get<RunModel[]>(fullUrl, opts);
  }

  RegisterUserInRun(run: RunModel) {
    var fullUrl = this.url + "/RegisterUserInRun";
    return this.http.post(fullUrl, run);

  }

  GetTargets(body: any){
    var fullUrl = this.url + "/FindUserTargetsByToken";
    return this.http.post<TargetModel[]>(fullUrl, body);
  }
}
