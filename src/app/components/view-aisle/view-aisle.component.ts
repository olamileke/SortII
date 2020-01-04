import { Component, OnInit } from '@angular/core';

import { DetailService } from '../../services/detail.service'; 
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-view-aisle',
  templateUrl: './view-aisle.component.html',
  styleUrls: ['./view-aisle.component.css']
})
export class ViewAisleComponent implements OnInit {

  constructor(private detail:DetailService, private notification:NotificationService) { }

  aisles=this.detail.aisles;

  ngOnInit() {
  }


  deleteAisle(index:number) {

    this.detail.aisleNames.unshift(this.aisles[index].name);
    this.detail.aisleRows.unshift(this.aisles[index].rows);
  	this.detail.aisles.splice(index,1); 
  	this.notification.showSuccessMessage('Aisle deleted Successfully');
  }

}
