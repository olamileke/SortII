import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  aisleNames = ['Joy', 'Gentleness', 'Patience', 'Kindness', 'Love', 'Faithfulness', 'Goodness', 'Temperance', 'Peace', 'Peace Plus'];
  aisleRows = [5,4,4,4,5,5,4,4,4,4];
  chaplaincyAttendance = [];
  // stewards in the uploaded excel file. Essentially all the stewards in the unit.
  totalStewards = [];

  aisles = [];

  // all the stewards present
  allStewards = [];

  newStewards = [];
  oldStewards = [];
  assignedStewards = [];
  assignedNewStewards = [];
  assignedOldStewards = [];

  service = 'Communion Service';
  posted = false;

  searchStewards = [];

  fileUploaded:boolean = false;

  constructor() { }
}
