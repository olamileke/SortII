import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tabs={addAisles:true, viewAisles:false, addSteward:false}

  changeTab(tab:any) {

  	let tabKeys=Object.keys(this.tabs);

  	for(let i=0; i < tabKeys.length; i++) {

  		this.tabs[tabKeys[i]]=false;
  	}

  	this.tabs[tab]=true;
  }

}
