import { Component, OnInit, ViewChild } from '@angular/core';

import { SidebarComponent } from '../sidebar/sidebar.component';
import { DetailService } from '../../services/detail.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private detail:DetailService) { }

  @ViewChild(SidebarComponent) sidebar;

  showNav = false;
  displaySearch = false;
  displayAttendanceUpload:boolean = false;
  searchResults = [];
  searched = false;
  elevations = ['A', 'B', 'C', 'D'];
  altElevations = ['A1', 'A2', 'B', 'C', 'D'];
  fileUploaded = this.detail.fileUploaded;

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


  checkForSteward(event:any) {

    this.searchResults = [];
    this.searched = true;

    if(event.target.value.length > 0) {

        this.searchResults = this.detail.searchStewards.filter(function(steward) {

              if(steward.name.includes(event.target.value.toLowerCase())) {

                  return steward;
              }
          }).slice(0,3);
    }
    else {

        this.searched = false;
    }
  }


  getStewardPartner(aisle:string, elevation:number, position:number):string {
      if(position == 0) {

          position = 1;
      }
      else {

          position = 0;
      }
      let stewards = this.detail.searchStewards.filter(function(steward) {

          if(steward.aisle == aisle && steward.elevation == elevation && steward.position == position) {
              return steward;
          }
      })

      if(stewards.length > 0) {

          return stewards[0].name;
      }

      return 'None';
  }


  getElevation(elevation:number, aisle:string):string {

      if(aisle == 'Joy' || aisle == 'Love' || aisle == 'Faithfulness') {

          return this.altElevations[elevation];
      }
      else {
          
          return this.elevations[elevation]
      }
  }

  toggleDisplayAttendanceUpload() {
      this.displayAttendanceUpload = !this.displayAttendanceUpload;
  }
}
