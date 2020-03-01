import { Component, OnInit } from '@angular/core';

import { DetailService } from '../../services/detail.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-view-stewards',
  templateUrl: './view-stewards.component.html',
  styleUrls: ['./view-stewards.component.css']
})
export class ViewStewardsComponent implements OnInit {

  stewards=this.detail.allStewards;

  constructor(private detail:DetailService, private notification:NotificationService) { }

  ngOnInit() {
  } 


  deleteSteward(i:number) {
    
    this.stewards.splice(i,1);	
    this.notification.showSuccessMessage("Steward deleted successfully");
  }

}
