import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DetailService } from '../../services/detail.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  tabs = {addAisles:true, viewAisles:false, addSteward:false, viewStewards:false, getCracking:false, postings:false}
  posted = this.detail.posted;

  @Output() changeTab = new EventEmitter();

  constructor(private detail:DetailService) { }

  ngOnInit() {

  }


  setActiveTab(tab:string, emit=false):void{

  	if(!this.tabs[tab]) {

		for(let tab in this.tabs) {
        
			this.tabs[tab] = false;
		}
	
		this.tabs[tab] = true;
		  	
	  	if(emit) {

	  		this.emitChangeTab(tab);
	  	}
	}
  }


  emitChangeTab(tab:string) {

  	this.changeTab.emit(tab);
  }

}
