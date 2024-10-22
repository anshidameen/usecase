import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonURL="/assets/data.json";
  constructor(private http:HttpClient) { }


  getAll():Observable<any>{
    return this.http.get<any>(this.jsonURL);
  }
}
