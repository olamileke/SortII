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
  allStewards=[
    {name:'Victor Nnaji', status:'new'},
    {name:'Chijindu Nicholas', status:'new'},
    {name:'Olude Ore', status:'new'},
    {name:'Odili Angel', status:'new'},
    {name:'Adesoye Fisayo', status:'new'},
    {name:'Chukwudi Chem', status:'new'},
    {name:'Churchill Fine Boy', status:'new'},
    {name:'Enebele Emmanuel', status:'new'},
    {name:'Prisca Isimoya', status:'new'},
    {name:'Karis Nwachukwu', status:'new'},
    {name:'Iyinami Jane', status:'new'},
    {name:'Danboyi Ethel', status:'new'},
    {name:'Ojewoye Peace', status:'new'},
    {name:'Bojuwoye Glory', status:'new'},
    {name:'Adeleye Ifeoluwa', status:'old'},
    {name:'Ekpo Winnifred', status:'old'},
    {name:'Ehanire Marousa', status:'old'},
    {name:'Ehanire Osahan', status:'old'},
    {name:'Archibong Idongesit', status:'old'},
    {name:'Olaore Grace', status:'old'},
    {name:'Emovon Ayomide', status:'old'},
    {name:'Adegunle Great', status:'old'},
    {name:'Babalola Joshua', status:'old'},
    {name:'Olalekan Funmi', status:'old'},
    {name:'Odedo Bright', status:'old'},
  ];

  newStewards = [
    {name:'Victor Nnaji', status:'new'},
    {name:'Chijindu Nicholas', status:'new'},
    {name:'Olude Ore', status:'new'},
    {name:'Odili Angel', status:'new'},
    {name:'Adesoye Fisayo', status:'new'},
    {name:'Chukwudi Chem', status:'new'},
    {name:'Churchill Fine Boy', status:'new'},
    {name:'Enebele Emmanuel', status:'new'},
    {name:'Prisca Isimoya', status:'new'},
    {name:'Karis Nwachukwu', status:'new'},
    {name:'Iyinami Jane', status:'new'},
    {name:'Danboyi Ethel', status:'new'},
    {name:'Ojewoye Peace', status:'new'},
    {name:'Bojuwoye Glory', status:'new'},
  ];

  oldStewards = [
    {name:'Adeleye Ifeoluwa', status:'old'},
    {name:'Ekpo Winnifred', status:'old'},
    {name:'Ehanire Marousa', status:'old'},
    {name:'Ehanire Osahan', status:'old'},
    {name:'Archibong Idongesit', status:'old'},
    {name:'Olaore Grace', status:'old'},
    {name:'Emovon Ayomide', status:'old'},
    {name:'Adegunle Great', status:'old'},
    {name:'Babalola Joshua', status:'old'},
    {name:'Olalekan Funmi', status:'old'},
    {name:'Odedo Bright', status:'old'},
  ];

  assignedStewards = [];
  assignedNewStewards = [];
  assignedOldStewards = [];

  service = 'Communion Service';
  posted = false;

  searchStewards = [];

  fileUploaded:boolean = false;

  constructor() { }
}
