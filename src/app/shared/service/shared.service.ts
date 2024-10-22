import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private shared = new BehaviorSubject<any>(null);
  newdata=this.shared.asObservable();
 
  updatedata(data:any){
    this.shared.next(data);
  }
}
