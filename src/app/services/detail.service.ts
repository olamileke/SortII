import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  aisleNames = ['Joy', 'Gentleness', 'Patience', 'Kindness', 'Love', 'Faithfulness', 'Goodness', 'Temperance', 'Peace', 'Peace Plus'];
  aisleRows = [5,4,4,4,5,5,4,4,4,4];

  aisles=[];

  allStewards=[];

  newStewards=[];

  oldStewards=[];

  assignedStewards=[];
  assignedNewStewards=[];
  assignedOldStewards=[];

  service='Communion Service';
  posted=false;

  constructor() { }
}
