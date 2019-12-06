import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetailService } from '../../services/detail.service';
import { NotificationService } from '../../services/notification.service';

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
  @Output() postings=new EventEmitter();

  setupForm:FormGroup;
 
  constructor(private fb:FormBuilder, private detail:DetailService, private notification:NotificationService) { }

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


  postStewards():boolean {

    if(this.detail.posted) {

      this.notification.showErrorMessage('Posting completed!');
      return false;
    }

    this.postings.emit();
    this.generateAisleRows();
    this.assignCommunionStewards();

    this.detail.posted=true;
  }


  generateAisleRows():void {

     for(let i=0; i < this.detail.aisles.length; i++) {

        for(let j=0; j < this.detail.aisles[i].rows; j++) {

            this.detail.aisles[i].postings.push([' ', ' ']);
        }
     }
   }


   assignCommunionStewards():void {

       this.assignAandBStewards();
       this.assignCandDStewards(2);
       this.assignCandDStewards(3);
   }


   assignAandBStewards():void {

       for(let i=0; i < this.detail.aisles.length; i++) {

           let aisles=2;

           if(this.detail.aisles[i].rows == 5) {

               aisles=3;
           }    

           for(let j=0; j < aisles; j++) {

               this.detail.aisles[i].postings[j]=this.assignElevations();
           }
       }
   }


   assignCandDStewards(elevation:number):void {

       let totalStewards=this.detail.newStewards.length + this.detail.oldStewards.length;

        for(let i=0; i < 2; i++) {

           for(let j=0; j < this.detail.aisles.length; j++) {

               let index=elevation;

               if(this.detail.aisles[j].postings.length == 5) {

                   index++;
               }

               if(totalStewards > this.detail.assignedStewards.length) {

                   this.detail.aisles[j].postings[index][i]=this.assignSteward(i);
               }
               else {
                   break;   
               }
           }
        }
   }


   assignSteward(status):string {

       let i=0;

       while(i < 1) {

           if(!status && this.detail.assignedNewStewards.length < this.detail.newStewards.length) {

               let index=Math.round(Math.random() * this.detail.newStewards.length) - 1;
               index == -1 ? index=0 : index=index;
               console.log(index);

               if(!this.detail.assignedStewards.includes(this.detail.newStewards[index].name)) {

                     this.detail.assignedStewards.push(this.detail.newStewards[index].name);
                     this.detail.assignedNewStewards.push(this.detail.newStewards[index].name);
                     i++;
                     return this.detail.newStewards[index].name;
               }
           }
           else {

               let index=Math.round(Math.random() * this.detail.oldStewards.length) - 1;
               index == -1 ? index=0 : index=index;
               console.log(index);

               if(!this.detail.assignedStewards.includes(this.detail.oldStewards[index].name)) {

                   this.detail.assignedStewards.push(this.detail.oldStewards[index].name);
                   i++;
                   return this.detail.oldStewards[index].name;
               }
           }
       }
   }


   assignElevations():any {

       let posting=[];
       let i=0;

       while(i < 1) {

           let index=Math.round(Math.random() * this.detail.oldStewards.length) - 1;

           index == -1 ? index=0 : index=index;

           if(!this.detail.assignedStewards.includes(this.detail.oldStewards[index].name)) {

               posting.push(this.detail.oldStewards[index].name);
               this.detail.assignedStewards.push(this.detail.oldStewards[index].name);
               i++;
           }
       }


       let j=0;

       while(j < 1) {

           if(this.detail.assignedNewStewards.length == this.detail.newStewards.length) {

               let index=Math.round(Math.random() * this.detail.oldStewards.length) - 1;
               index == -1 ? index=0 : index=index;
               console.log(index);

               if(!this.detail.assignedStewards.includes(this.detail.oldStewards[index].name)) {

                     posting.push(this.detail.oldStewards[index].name);
                     this.detail.assignedStewards.push(this.detail.oldStewards[index].name);
                     j++;
               }

           }
           else {

               let index=Math.round(Math.random() * this.detail.newStewards.length) - 1;
               index == -1 ? index=0 : index=index;
               console.log(index);

               if(!this.detail.assignedStewards.includes(this.detail.newStewards[index].name)) {

                     posting.push(this.detail.newStewards[index].name);
                     this.detail.assignedStewards.push(this.detail.newStewards[index].name);
                     this.detail.assignedNewStewards.push(this.detail.newStewards[index].name);
                     j++;
               }

           }
       }

       return posting;
   }


}
