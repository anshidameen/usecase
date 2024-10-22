import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  items: any[] = [];
  displayCount=4;

  constructor(private data:DataService,private share:SharedService,private router:Router){}
  ngOnInit(){
    this.getAllData();
  }
  
  getAllData(){
    this.data.getAll().subscribe(
      (data)=>{
        this.items=data
      }
    )
  }

  shareDate(item:any){
    console.log(item);
    this.share.updatedata(item);
    this.router.navigate(['/profile'])
  }

  onClick(){
    this.displayCount += 4;
  }
}
