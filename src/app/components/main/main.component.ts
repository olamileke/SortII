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

  showNav = false;
  displaySearch = false;
  displayUpload:boolean = false;
  type:string = 'Chaplaincy Attendance';

  ngOnInit() {
  }

  tabs={addAisles:true, viewAisles:false, addSteward:false, viewStewards:false, getCracking:false, postings:false}

  changeTab(tab:any, toggle=true) {
    for(let tab in this.tabs) {
        this.tabs[tab] = false;
    }

    this.tabs[tab] = true;

    if(screen.width <= 991 && toggle) {
        this.toggleNav();
    }
  }

  toggleNav() {
    this.showNav = !this.showNav;
  }

  togglePostings() {
    this.changeTab('postings', false);
    this.sidebar.setActiveTab('postings');
    this.sidebar.posted = true;
  }

  toggleSearch() {
    this.displaySearch = !this.displaySearch;
  }

  toggleDisplayUpload(type:any = null):void {
    if(type == 'close') {
        this.displayUpload = false;
        return;
	}
	
    this.displayUpload = !this.displayUpload;
    type = null ? this.type = this.type : this.type = type;
  }
}
