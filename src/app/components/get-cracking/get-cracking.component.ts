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

  selectedService = 'Communion Service';
  currentDate:string;
  aisles = this.detail.aisles;
  @Output() postings=new EventEmitter();

  setupForm:FormGroup;
 
  constructor(private fb:FormBuilder, private detail:DetailService, private notification:NotificationService) { }

  ngOnInit() {

  	this.setupForm = this.fb.group({

  		serviceType:['Communion Service', [Validators.required]],
  		numPostings:['2', [Validators.required]]
  	});
  }

  changeServiceType(event:any):void {

  	this.selectedService = event.target.value;
    this.detail.service = event.target.value;
  }

  postStewards():boolean {

    if(!this.validation()) {

        return;
    }

    this.postings.emit();
    this.generateAisleRows();
    this.assignOldStewards();
    this.assignNewStewards();
    this.assignLastElevations()

    this.detail.posted = true;
  }


  validation():boolean {

    if(this.detail.aisles.length == 0) {
        this.notification.showErrorMessage('One or more aisles needed!');
        return false;
    }


    if(this.detail.posted) {

      this.notification.showErrorMessage('Posting completed!');
      return false;
    }

    if(this.detail.allStewards.length < 25) {

        this.notification.showErrorMessage("Ateast 25 stewards needed!");
        return false;
    }

    return true;
  }


  generateAisleRows():void {

    this.detail.aisles.forEach(aisle => {
        
        for(let i = 0; i < aisle.rows ; i++) {
            aisle.postings.push([' ', ' ']);
        }
    })
   }


   assignOldStewards():void {

       this.assignAisles(0, 1);
       this.assignAisles(1, 1);
       this.assignAisles(2, 1);
       this.assignAisles(3, 1);
   }


   assignNewStewards():void {

       this.assignAisles(0, 0);
       this.assignAisles(1, 0);
       this.assignAisles(2, 0);
       this.assignAisles(3, 0);
   }


   assignLastElevations():void {

       this.assignAisles(4, 1);
       this.assignAisles(4, 0);
   }

   assignAisles(index:number, position):void {

       for(let aisle of this.detail.aisles) {

            if(index == 4) {

                if(aisle.rows == 4) {
                    break;
                }
            }

            if(this.detail.allStewards.length > this.detail.assignedStewards.length) {
                let steward = this.assignSteward(position);
                let searchObject = {name:steward.toLowerCase(), position:position, aisle:aisle.name, elevation:index};
                this.detail.searchStewards.push(searchObject);
                aisle.postings[index][position] = steward;
            }
            else {
                break;   
            }
       }
   }
 

   assignSteward(status:boolean):string {

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

       let i = 0;

       while(i < 1) {

            let index = Math.round(Math.random() * arrayToCheck.length) - 1;
            index == -1 ? index = 0 : index = index;

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
