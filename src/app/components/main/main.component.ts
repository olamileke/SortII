import { Component, OnInit, ViewChild } from '@angular/core';

import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  @ViewChild(SidebarComponent) sidebar;

  showNav=false;

  ngOnInit() {
  }

  tabs={addAisles:true, viewAisles:false, addSteward:false, viewStewards:false, getCracking:false, postings:false}

  changeTab(tab:any) {

  	let tabKeys=Object.keys(this.tabs);

  	for(let i=0; i < tabKeys.length; i++) {

  		this.tabs[tabKeys[i]]=false;
  	}

  	this.tabs[tab]=true;
  }



  toggleNav() {

     this.showNav=!this.showNav;
  }


  togglePostings() {

    this.changeTab('postings');
    this.sidebar.setActiveTab('postings');
    this.sidebar.showPostings=true;
  }

}
