import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  tabs={addAisles:true, viewAisles:false, addSteward:false, getCracking:false}

  constructor() { }

  ngOnInit() {

  	this.setActiveTab('addAisles');
  }


  setActiveTab(tab:string):void{

  	let tabKeys=Object.keys(this.tabs);

  	for(let i=0; i < tabKeys.length; i++) {

  		this.tabs[tabKeys[i]]=false;
  	}

  	this.tabs[tab]=true;
  }

}
