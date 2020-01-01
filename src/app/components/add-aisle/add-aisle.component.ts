import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DetailService } from '../../services/detail.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-add-aisle',
  templateUrl: './add-aisle.component.html',
  styleUrls: ['./add-aisle.component.css']
})
export class AddAisleComponent implements OnInit {

  aisleForm:FormGroup;

  aisles=['Joy', 'Gentleness', 'Patience', 'Kindness', 'Love', 'Faithfulness', 'Goodness', 'Temperance', 'Peace', 'Peace Plus'];
  aisleRows=[5,4,4,4,5,5,4,4,4,4];
  index=0;

  constructor(private fb:FormBuilder, private details:DetailService, private notification:NotificationService) { }

  ngOnInit() {

  	this.aisleForm=this.fb.group({
  		name:[this.aisles[0],[Validators.required, Validators.minLength(3)]],
  		coordinator:['', [Validators.required, Validators.minLength(3)]],
  		rows:[this.aisleRows[0], [Validators.required]]
  	}) 

   }

  addAisle(form:FormGroup){ 

  	let aisle={name:'', coordinator:'', rows:4, postings:[]};

  	aisle['name']=form.get('name').value.charAt(0).toUpperCase() + form.get('name').value.slice(1,).toLowerCase();
  	aisle['coordinator']=form.get('coordinator').value;
  	aisle['rows']=form.get('rows').value;

  	this.details.aisles.push(aisle);
  	this.notification.showSuccessMessage('Aisle added successfully');
    this.index++;
  	form.get('name').setValue(this.aisles[this.index]);
    form.get('rows').setValue(this.aisleRows[this.index]);
  	form.get('coordinator').reset();
  }

}
