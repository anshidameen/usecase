import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any
  constructor(private share:SharedService){}
  ngOnInit() {
    this.share.newdata.subscribe((data)=>{
      this.user=data;
      console.log(this.user);
    })
  }

}
