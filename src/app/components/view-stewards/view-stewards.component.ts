import { Component, OnInit } from '@angular/core';

import { DetailService } from '../../services/detail.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-view-stewards',
  templateUrl: './view-stewards.component.html',
  styleUrls: ['./view-stewards.component.css']
})
export class ViewStewardsComponent implements OnInit {

  stewards = this.detail.allStewards;

  constructor(private detail:DetailService, private notification:NotificationService) { }

  ngOnInit() {
  } 

  deleteSteward(i:number, name:string, status:string) {
	// deleting the steward from the list of all stewards
    this.stewards.splice(i,1);	 

	// deleting the steward from his/her respective old/new stewards list
    if(status == 'old') {
		let idx = this.detail.oldStewards.findIndex(steward => steward.name == name)
		this.detail.oldStewards.splice(idx,1);
	}
	else {
		let idx = this.detail.newStewards.findIndex(steward => steward.name == name)
		this.detail.newStewards.splice(idx,1);
	}

    this.notification.showSuccessMessage("Steward deleted successfully");
  }

}
