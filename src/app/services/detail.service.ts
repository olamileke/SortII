import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  aisles=[
  		{name:'Joy', coordinator:'Oyinda', rows:5, postings:[]},
  		{name:'Gentleness', coordinator:'Mola', rows:4, postings:[]},
  		{name:'Patience', coordinator:'Faith', rows:4, postings:[]},
        {name:'Kindness', coordinator:'Success', rows:4, postings:[]},
  		{name:'Love', coordinator:'Ehimhen', rows:5, postings:[]},
        {name:'Faithfulness', coordinator:'Sams', rows:5, postings:[]},
  		{name:'Goodness', coordinator:'Chapi', rows:4, postings:[]},
        {name:'Temperance', coordinator:'Taiwoly', rows:4, postings:[]},
        {name:'Peace', coordinator:'Leke', rows:4, postings:[]},
        {name:'Peace Plus', coordinator:'Chinedu', rows:4, postings:[]}
  ];

  stewards=[];

  newStewards=[
      {name:'Bojuwoye Glory', status:'new'},
      {name:'Ogundipe Iyanu',status:'new'},
      {name:'Olaore Grace', status:'new'},
      {name:'Adeh Glory', status:'new'},
      {name:'Ofem Otaniobasi', status:'new'},
      {name:'Iruonagbe Nelson', status:'new'},
      {name:'Sika Mirabel', status:'new'},
      {name:'Biety Benita', status:'new'},
      {name:'Anim Joseph', status:'new'},
      {name:'Macaulay Micheal', status:'new'},
      {name:'Iwuanyanwu Mmesoma', status:'new'},
      {name:'Imade Kenneth', status:'new'},
      {name:'Daodu Oluwatosin', status:'new'},
      {name:'Eyo Elijah', status:'new'},
      {name:'Churchill Chinedu', status:'new'},
      {name:'Solarin Tobi', status:'new'},
      {name:'Ajigbon Oyinda', status:'new'},
      {name:'Oyinkan Biz Ad', status:'new'},
      {name:'Garuba Solomon', status:'new'},
      {name:'Franklyn CST', status:'new'},
      {name:'James Johnson', status:'new'},
  ];

  oldStewards=[
      {name:'Ifeoluwa Adeleye', status:'old'},
      {name:'Ehanire Osahon', status:'old'},
      {name:'Adeh Tokoni', status:'old'},
      {name:'Prosper Mech', status:'old'},
      {name:'Adegunle Great', status:'old'},
      {name:'Babalola Joshua', status:'old'},
      {name:'Emovon Ayomide', status:'old'},
      {name:'Nwoko Kristen', status:'old'},
      {name:'Joan Biz Ad', status:'old'},
      {name:'Oyeniran Adeola', status:'old'},
      {name:'Abiola Adeola', status:'old'},
      {name:'Femi Small Chops', status:'old'},
      {name:'Ilobison Chinedum', status:'old'},
      {name:'Soyegbon Anu', status:'old'},
      {name:'Epelle Boma', status:'old'},
      {name:'Adesiyan Shirley', status:'old'},
      {name:'Edokwe Chidera', status:'old'},
      {name:'Akinkunmi Olamide', status:'old'},
      {name:'Olalekan Funmilayo', status:'old'},
      {name:'Akogun Olamide', status:'old'},
      {name:'Amodu Emmanuel', status:'old'},
      {name:'Uno Joseph', status:'old'},
      {name:'Omolara Archi', status:'old'},
      {name:'Nengi Hart', status:'old'},
      {name:'Boms Deborah', status:'old'},
      {name:'Jatau Nissi', status:'old'},
      {name:'Kiki Psychology', status:'old'},
      {name:'Shopitan Greatness', status:'old'},
      {name:'Tofunmi Ghost', status:'old'},
      {name:'Omogbanle Favour', status:'old'},
      {name:'Ajala David', status:'old'},
      // {name:'Abu Solomon', status:'old'},
      // {name:'Malik David', status:'old'},
      // {name:'Ronnie Favour', status:'old'},
      // {name:'Nnama Jeff', status:'old'},
      // {name:'Fregehene Dieko', status:'old'},
      // {name:'Chinedu 500', status:'old'}
  ];

  assignedStewards=[];
  assignedNewStewards=[];
  assignedOldStewards=[];

  service='Communion Service';
  posted=false;

  constructor() { }
}
