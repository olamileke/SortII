import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  tabs={addAisles:false, viewAisles:false, addSteward:false, getCracking:false}

  @Output() changeTab=new EventEmitter();

  constructor() { }

  ngOnInit() {

  	this.setActiveTab('addAisles');
  }


  setActiveTab(tab:string, emit=false):void{

  	if(!this.tabs[tab]) {

	  	let tabKeys=Object.keys(this.tabs);

	  	for(let i=0; i < tabKeys.length; i++) {

	  		this.tabs[tabKeys[i]]=false;
	  	}

	  	this.tabs[tab]=true;

		  	
	  	if(emit) {

	  		this.emitChangeTab(tab);
	  	}
	}
  }


  emitChangeTab(tab:string) {

  	this.changeTab.emit(tab);
  }

}
