import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-steward',
  templateUrl: './steward.component.html',
  styleUrls: ['./steward.component.css']
})
export class StewardComponent implements OnInit {

  @Input() name:string;
  @Input() aisle:string;
  @Input() elevation:string;
  @Input() position:string;

  @Output() changeName=new EventEmitter();

  showCheck=false;
  alt_name:string;
  new_name:string;

  constructor(private notification:NotificationService) { }

  ngOnInit() {

  	this.alt_name=this.name;
  }


  verifyName(event:any):void {

  	if(event.target.value != this.alt_name) {

  		this.showCheck=true;
  	}
  	else {

  		this.showCheck=false;
  	}

    this.new_name=event.target.value;

  }


  emitChange() {

      let details={aisle:this.aisle, elevation:this.elevation, position:this.position, name:this.new_name};
    	this.changeName.emit(details);
  }

}
