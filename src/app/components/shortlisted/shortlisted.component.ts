import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-shortlisted',
  templateUrl: './shortlisted.component.html',
  styleUrls: ['./shortlisted.component.css']
})
export class ShortlistedComponent implements OnInit {

  profile:any[]=[];
  currentIndex: number = 0;
  constructor(private data:DataService){}
  ngOnInit(){
    this.getData();
  }

  getData(){
    this.data.getAll().subscribe((res)=>{
   this.profile=res
    })
  }
  onLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  onRight() {
    if (this.currentIndex < this.profile.length - 1) {
      this.currentIndex++;
    }
  }

}
