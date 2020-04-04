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

  constructor(private fb:FormBuilder, private details:DetailService, private notification:NotificationService) { }

  ngOnInit() {
	this.createForm();
  }

  createForm() {
	this.aisleForm = this.fb.group({
		name:[this.details.aisleNames[0],[Validators.required, Validators.minLength(3)]],
		coordinator:['', [Validators.required, Validators.minLength(3)]],
		rows:[this.details.aisleRows[0], [Validators.required]]
	}) 
  }

  addAisle(form:FormGroup){ 
    if(this.details.posted) {
        this.notification.showErrorMessage('Posting completed!');
        return false;
    }

  	let aisle = {name:'', coordinator:'', rows:4, postings:[]};

  	aisle['name'] = form.get('name').value.charAt(0).toUpperCase() + form.get('name').value.slice(1,).toLowerCase();
  	aisle['coordinator'] = form.get('coordinator').value;
  	aisle['rows'] = form.get('rows').value;

  	this.details.aisles.push(aisle);
  	this.notification.showSuccessMessage('Aisle added successfully');

    this.reflectAisleState(aisle.name);
  	form.get('name').setValue(this.details.aisleNames[0]);
    form.get('rows').setValue(this.details.aisleRows[0]);
  	form.get('coordinator').reset();
  }


  // removing the added aisle from the list of aisles
  reflectAisleState(name:string) {

	let index = this.details.aisleNames.indexOf(name);
    this.details.aisleNames.splice(index, 1);
    this.details.aisleRows.splice(index, 1);
  }
}
