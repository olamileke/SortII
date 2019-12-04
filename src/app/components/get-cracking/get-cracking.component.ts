import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetailService } from '../../services/detail.service';

@Component({
  selector: 'app-get-cracking',
  templateUrl: './get-cracking.component.html',
  styleUrls: ['./get-cracking.component.css']
})
export class GetCrackingComponent implements OnInit {

  selectedService='Communion Service';
  currentDate:string;
  months=['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  aisles=this.detail.aisles;
  stewards=this.detail.stewards;
  @Output() postings=new EventEmitter();

  setupForm:FormGroup;
 
  constructor(private fb:FormBuilder, private detail:DetailService) { }

  ngOnInit() {

  	this.currentDate=this.getCurrentDate();

  	this.setupForm=this.fb.group({

  		serviceType:['Communion Service', [Validators.required]],
  		numPostings:['2', [Validators.required]]
  	});
  }


  getCurrentDate():string {

  	let date=new Date();
  	
  	let currentDate=date.getDate();
  	let currentMonth=this.months[date.getMonth()];
  	let currentYear=date.getFullYear();

  	return `${currentMonth} ${currentDate} ${currentYear}`;
  }


  changeServiceType(event:any):void {

  	this.selectedService=event.target.value;
    this.detail.service=event.target.value;
  }


  changeNumPostings(event:any):void {

      this.detail.numPostings=event.target.value;
  }


  postStewards():void {

    this.postings.emit();
    this.generateAisleRows();
    this.assignStewards();

    console.log(this.detail.aisles);
  }


  generateAisleRows():void {

     for(let i=0; i < this.detail.aisles.length; i++) {

        for(let j=0; j < this.detail.aisles[i].rows; j++) {

            this.detail.aisles[i].postings.push([]);
        }
     }
   }


   assignStewards():void {

       this.assignAandBStewards();
   }


   assignAandBStewards():void {

       for(let i=0; i < this.detail.aisles.length; i++) {

           let aisles=2;

           if(this.detail.aisles[i].rows == 5) {

               aisles=3;
           }    


           for(let j=0; j < aisles; j++) {

               this.detail.aisles[i].postings[j]=this.assign();
           }
       }
   }


   assign():any {

       let posting=[];
       let i=0;

       while(i < 1) {

           let index=Math.round(Math.random() * this.detail.stewards.length) - 1;

           if(!this.detail.assignedStewards.includes(this.detail.stewards[index].name)) {

               posting.push(this.detail.stewards[index].name);
               this.detail.assignedStewards.push(this.detail.stewards[index].name);
               i++;
           }
       }


       let j=0;

       while(j < 1) {

           let index=Math.round(Math.random() * this.detail.stewards.length) - 1;

            if(!this.detail.assignedStewards.includes(this.detail.stewards[index].name)) {

                // if(posting[0].status != this.detail.stewards[index].status) {

                     posting.push(this.detail.stewards[index].name);
                     this.detail.assignedStewards.push(this.detail.stewards[index].name);
                     j++;
                // }

           }
       }

       return posting;
   }


}
