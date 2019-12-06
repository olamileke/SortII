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
      {name:'Bojuwoye Glory', level:100, status:'new'},
      {name:'Ogundipe Iyanu', level:100, status:'new'},
      {name:'Olaore Grace', level:200, status:'new'},
      {name:'Adeh Glory', level:400, status:'new'},
      {name:'Ofem Otaniobasi', level:400, status:'new'},
      {name:'Iruonagbe Nelson', level:500, status:'new'},
      {name:'Sika Mirabel', level:500, status:'new'},
      {name:'Biety Benita', level:100, status:'new'},
      {name:'Anim Joseph', level:100, status:'new'},
      {name:'Macaulay Micheal', level:100, status:'new'},
      {name:'Iwuanyanwu Mmesoma', level:300, status:'new'},
      {name:'Imade Kenneth', level:400, status:'new'},
      {name:'Daodu Oluwatosin', level:300, status:'new'},
      {name:'Eyo Elijah', level:500, status:'new'},
      {name:'Churchill Chinedu', level:100, status:'new'},
      {name:'Solarin Tobi', level:100, status:'new'},
      {name:'Ajigbon Oyinda', level:300, status:'new'},
      {name:'Oyinkan Biz Ad', level:300, status:'new'},
      {name:'Garuba Solomon', level:400, status:'new'},
      {name:'Franklyn CST', level:400, status:'new'},
      {name:'James Johnson', level:200, status:'new'},
  ];

  oldStewards=[
      {name:'Ifeoluwa Adeleye', level:500, status:'old'},
      {name:'Ehanire Osahon', level:200, status:'old'},
      {name:'Adeh Tokoni', level:200, status:'old'},
      {name:'Prosper Mech', level:300, status:'old'},
      {name:'Adegunle Great', level:200, status:'old'},
      {name:'Babalola Joshua', level:200, status:'old'},
      {name:'Emovon Ayomide', level:200, status:'old'},
      {name:'Nwoko Kristen', level:200, status:'old'},
      {name:'Joan Biz Ad', level:200, status:'old'},
      {name:'Oyeniran Adeola', level:300, status:'old'},
      {name:'Abiola Adeola', level:500, status:'old'},
      {name:'Femi Small Chops', level:500, status:'old'},
      {name:'Ilobison Chinedum', level:400, status:'old'},
      {name:'Soyegbon Anu', level:200, status:'old'},
      {name:'Epelle Boma', level:300, status:'old'},
      {name:'Adesiyan Shirley', level:300, status:'old'},
      {name:'Edokwe Chidera', level:400, status:'old'},
      {name:'Akinkunmi Olamide', level:200, status:'old'},
      {name:'Olalekan Funmilayo', level:200, status:'old'},
      {name:'Akogun Olamide', level:500, status:'old'},
      {name:'Amodu Emmanuel', level:500, status:'old'},
      {name:'Uno Joseph', level:500, status:'old'},
      {name:'Omolara Archi', level:400, status:'old'},
      {name:'Nengi Hart', level:400, status:'old'},
      {name:'Boms Deborah', level:400, status:'old'},
      {name:'Jatau Nissi', level:300, status:'old'},
      {name:'Kiki Psychology', level:300, status:'old'},
      {name:'Shopitan Greatness', level:300, status:'old'},
      {name:'Tofunmi Ghost', level:300, status:'old'},
      {name:'Omogbanle Favour', level:200, status:'old'},
      {name:'Ajala David', level:500, status:'old'},
      {name:'Abu Solomon', level:400, status:'old'},
      {name:'Malik David', level:500, status:'old'},
      {name:'Ronnie Favour', level:500, status:'old'},
      {name:'Nnama Jeff', level:500, status:'old'},
      {name:'Fregehene Dieko', level:500, status:'old'},
      {name:'Chinedu 500', level:500, status:'old'}
  ];

  assignedStewards=[];
  assignedNewStewards=[];

  service='Communion Service';
  numPostings=2;
  posted=false;

  constructor() { }
}
