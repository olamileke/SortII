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
	position == 0 ? position = 1 : position = 0;
	
    let steward = this.detail.searchStewards.find(steward => 
		steward.aisle == aisle && steward.elevation == elevation && steward.position == position
	)

	console.log(steward);

    if(!steward || steward.name.trim().length == 0) {
		return 'None'
	}

    return steward.name;
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
