import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  aisles=[
  			// {name:'Joy',coordinator:'Oyinda',rows:4, index:0},
  			// {name:'Gentleness',coordinator:'Mola',rows:4, index:1},
  			// {name:'Patience',coordinator:'Faith',rows:4, index:2},
  			// {name:'Kindness',coordinator:'Taiwo',rows:4, index:3},
  			// {name:'Love',coordinator:'Ehimhen',rows:4, index:4},
  			];

  stewards=[];

  constructor() { }
}
