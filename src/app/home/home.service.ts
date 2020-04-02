import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reponse } from '../repet/repet.component';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  randomize(studList) {
    return this.http.post('http://localhost:8080/group', studList);
  }
  repet(rep): Observable<Reponse> {
    return this.http.post<Reponse>('http://localhost:8080/repet', rep);
  }
}
