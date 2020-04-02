import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { impotDTO } from './impot.model';

@Injectable({
  providedIn: 'root'
})
export class ImpotService {

  constructor(private http: HttpClient) { }


  getTaxes(impot: impotDTO) {
    return this.http.post('http://localhost:8080/impot', impot);
  }
}
