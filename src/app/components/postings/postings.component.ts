import { Component, OnInit } from '@angular/core';

import { DetailService } from '../../services/detail.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-postings',
  templateUrl: './postings.component.html',
  styleUrls: ['./postings.component.css']
})
export class PostingsComponent implements OnInit {

  currentDate:string;
  months=['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  service=this.detail.service;
  aisles=this.detail.aisles;
  selectedAisle=this.aisles[0];
  rows=['A', 'B', 'C', 'D', 'E'];

  constructor(private detail:DetailService, private notification:NotificationService) { }

  ngOnInit() {

  	this.currentDate=this.getCurrentDate();
  }


  getCurrentDate():string {

  	let date=new Date();
  	
  	let currentDate=date.getDate();
  	let currentMonth=this.months[date.getMonth()];
  	let currentYear=date.getFullYear();

  	return `${currentMonth} ${currentDate} ${currentYear}`;
  }


  changeSelectedAisle(event:any): void {

      this.selectedAisle=this.getAisle(event.target.value);
  }


  getAisle(name:string): any {

      let aisles=this.aisles.filter(function(aisle) {

          return aisle.name == name
      });

      return aisles[0];
  }


  getRow(i:number): string {

      return this.rows[i];
  }


  changeName(details:any) {

      let aisles=this.aisles.filter(function(aisle) {

          return aisle.name == details.aisle;
      });

      aisles[0].postings[details.elevation][details.position]=details.name;
      this.notification.showSuccessMessage('Name changed successfully!');
  }

}
