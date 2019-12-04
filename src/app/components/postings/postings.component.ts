import { Component, OnInit } from '@angular/core';

import { DetailService } from '../../services/detail.service';

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
  rows=['A', 'B', 'C', 'D', 'E']

  constructor(private detail:DetailService) { }

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

      for(let i=0; i < this.aisles.length; i++) {

          if(this.aisles[i].name == name) {

              return this.aisles[i];
              break;
          }
      }
  }


  getRow(i:number): string {

      return this.rows[i];
  }

}
