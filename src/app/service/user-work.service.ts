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
    var fullUrl = this.url + "/addCompetition";

    console.log(fullUrl)
    return this.http.post(fullUrl, competition);
  }


  getAllCompetition(): Observable<Competition[]> {
    
    let opts = {
      headers: new HttpHeaders({
      "X-Requested-With": "HttpClient"
    })   
    }   
    var fullUrl = this.url + "/GetAllCompetition";
    console.log(opts.headers.get("X-Requested-With"))

    return this.http.get<Competition[]>(fullUrl, opts);
  }


  getACompetitionById(id: string): Observable<Competition> {
    
    let opts = {
      headers: new HttpHeaders({
      "X-Requested-With": "HttpClient"
    })   
    }   
    var fullUrl = this.url + "/GetCompetitionById/" + id;
    console.log(fullUrl)

    return this.http.get<Competition>(fullUrl, opts);
  }

}
