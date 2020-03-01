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
  aisles=this.detail.aisles;
  @Output() postings=new EventEmitter();

  setupForm:FormGroup;
 
  constructor(private fb:FormBuilder, private detail:DetailService, private notification:NotificationService) { }

  ngOnInit() {

  	this.setupForm=this.fb.group({

  		serviceType:['Communion Service', [Validators.required]],
  		numPostings:['2', [Validators.required]]
  	});
  }


  changeServiceType(event:any):void {

  	this.selectedService=event.target.value;
    this.detail.service=event.target.value;

    if(event.target.value == 'Anointing Service') {

        this.setupForm.get('numPostings').setValue('1');
    }
    else {

        this.setupForm.get('numPostings').setValue('2');
    }
  }



  postStewards():boolean {

    if(!this.validation()) {

        return false;
    }

    this.postings.emit();
    this.generateAisleRows();

    if(this.detail.service != 'Anointing Service') {

        this.assignCommunionStewardsFirst();
        this.assignCommunionStewardsNext();
        this.assignLastElevations()
    }
    else {

        this.assignAnointingStewards();
    }

    this.detail.posted=true;
  }


  validation():boolean {

    if(this.detail.posted) {

      this.notification.showErrorMessage('Posting completed!');
      return false;
    }


    if(this.detail.service == 'Anointing Service') {

        if(this.detail.allStewards.length < 15) {

            this.notification.showErrorMessage("Ateast 15 stewards needed initially");
            return false;
        }
    }
    else {

        if(this.detail.allStewards.length < 25) {

            this.notification.showErrorMessage("Ateast 25 stewards needed initially");
            return false;
        }
    }

    return true;

  }


  generateAisleRows():void {

     for(let i=0; i < this.detail.aisles.length; i++) {

        for(let j=0; j < this.detail.aisles[i].rows; j++) {

            if(this.detail.service != 'Anointing Service') {

                this.detail.aisles[i].postings.push([' ', ' ']);
            }

            else {

                this.detail.aisles[i].postings.push(['']);
            }
        }
     }
   }


   assignCommunionStewardsFirst():void {

       this.assignAislesCommunion(0, 1);
       this.assignAislesCommunion(1, 1);
       this.assignAislesCommunion(2, 1);
       this.assignAislesCommunion(3, 1);
   }


   assignCommunionStewardsNext():void {

       this.assignAislesCommunion(0, 0);
       this.assignAislesCommunion(1, 0);
       this.assignAislesCommunion(2, 0);
       this.assignAislesCommunion(3, 0);
   }



   assignLastElevations():void {

       this.assignAislesCommunion(4, 1);
       this.assignAislesCommunion(4, 0);
   }


   assignAnointingStewards(): void {

       this.assignA_Anointing();
   }


   assignA_Anointing() {

       for(let i=0; i < this.detail.aisles.length; i++) {

           let count = 1;

           if(this.detail.aisles[i].postings.length == 5) {

               count=2;
           }

           for(let j=0; j < count; j++) { 

               if(this.detail.assignedOldStewards.length < this.detail.oldStewards.length) {

                   this.detail.aisles[i].postings[j]=[this.getSteward(this.detail.oldStewards, this.detail.assignedOldStewards)];
               }
               else {

                   this.detail.aisles[i].postings[j]=[this.getSteward(this.detail.newStewards)];
               }
            }
       }

       this.assignOthers_Anointing(1);
       this.assignOthers_Anointing(2);
       this.assignOthers_Anointing(3);
   } 


   assignOthers_Anointing(elevation:number) {

       for(let i=0; i < this.detail.aisles.length; i++) {

           let position=elevation;

           if(this.detail.aisles[i].postings.length == 5) {

               position++;
           }

           if(this.detail.allStewards.length == this.detail.assignedStewards.length) {

               break;
           }

           this.detail.aisles[i].postings[position]=[this.getSteward(this.detail.allStewards)];
       }
   }

   assignAislesCommunion(elevation:number, position):void {

       for(let j=0; j < this.detail.aisles.length; j++) {

           let index = elevation;

           if(index == 3) {

               if(this.detail.aisles[j].postings.length == 4) {

                   break;
               }
           }

           if(index == 4) {

               if(this.detail.aisles[j].postings.length == 4) {

                   index = 3;
               }
           }

           if(this.detail.allStewards.length > this.detail.assignedStewards.length) {

               let steward = this.assignSteward(position);
               let searchObject = {name:steward.toLowerCase(), position:position, aisle:this.detail.aisles[j].name, elevation:index};
               this.detail.searchStewards.push(searchObject);
               this.detail.aisles[j].postings[index][position] = steward;
           }
           else {
               console.log(this.detail.searchStewards);
               break;   
           }
       }
   }


   assignSteward(status):string {

        if(!status && this.detail.assignedNewStewards.length < this.detail.newStewards.length) {

          return this.getSteward(this.detail.newStewards, this.detail.assignedNewStewards)
       }
       else {

           if(this.detail.assignedOldStewards.length < this.detail.oldStewards.length) {

              return this.getSteward(this.detail.oldStewards, this.detail.assignedOldStewards);
           }
           else {
              return this.getSteward(this.detail.newStewards, this.detail.assignedNewStewards)
           }
       }
   }


   getSteward(arrayToCheck:any, arrayToAdd=null) {

       let i=0;

       while(i < 1) {

            let index=Math.round(Math.random() * arrayToCheck.length) - 1;
            index == -1 ? index=0 : index=index;

            if(!this.detail.assignedStewards.includes(arrayToCheck[index]['name'])) {

                 this.detail.assignedStewards.push(arrayToCheck[index]['name']);

                 if(arrayToAdd != null) {
                    
                    arrayToAdd.push(arrayToCheck[index]['name']);
                 }

                 i++;
                 return arrayToCheck[index]['name'];
            } 
        }
   }
}
