import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

import { DetailService } from '../../services/detail.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-postings',
  templateUrl: './postings.component.html',
  styleUrls: ['./postings.component.css']
})
export class PostingsComponent implements OnInit {

  EXCEL_TYPE='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  EXCEL_EXTENSION='.xlsx';
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


  downloadPostings() {

     let workbook:XLSX.WorkBook={Sheets:{}, SheetNames:[]};

     for(let i=0; i < this.aisles.length; i++) {

         let worksheet:XLSX.WorkSheet=XLSX.utils.aoa_to_sheet(this.formatPostings(this.aisles[i].postings));
         workbook.Sheets[this.aisles[i].name]=worksheet;
         workbook.SheetNames.push(this.aisles[i].name);
     }

     const buffer=XLSX.write(workbook, {bookType:'xlsx', type:'array'});
     const data:Blob=new Blob([buffer], {type:this.EXCEL_TYPE});
     let filename=this.detail.service + ' ' + 'postings'
     FileSaver.saveAs(data, filename);
  }


  formatPostings(postings:any[]) {

      let sorts=JSON.parse(JSON.stringify(postings));

      for(let i=0; i < sorts.length; i++) {

          for(let j=0; j < sorts[i].length; j++) {

              if(sorts[i][j].trim().length == 0) {

                  sorts[i][j]= 'empty';
              }
          }
      }

      return sorts;
  }

}
