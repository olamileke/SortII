import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DetailService } from '../../services/detail.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private detail:DetailService) { }

  @Output() closeSearch = new EventEmitter();
  elevations = ['A', 'B', 'C', 'D'];
  altElevations = ['A1', 'A2', 'B', 'C', 'D'];
  searchResults = [];
  searched = false;

  ngOnInit() {
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

    if(stewards[0].name == '') {
        return 'None';
    }

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

  close():void {
	this.closeSearch.emit();
  }

}
