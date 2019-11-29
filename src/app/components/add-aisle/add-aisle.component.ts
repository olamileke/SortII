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

  	this.aisleForm=this.fb.group({
  		name:['',[Validators.required, Validators.minLength(3)]],
  		coordinator:['', [Validators.required, Validators.minLength(3)]],
  		rows:['4', [Validators.required]]
  	})
  }


  addAisle(form:FormGroup) {

  	let aisle={name:'', coordinator:'', rows:4, index:5};

  	aisle['name']=form.get('name').value.charAt(0).toUpperCase() + form.get('name').value.slice(1,).toLowerCase();
  	aisle['coordinator']=form.get('coordinator').value;
  	aisle['rows']=form.get('rows').value;

  	this.details.aisles.push(aisle);
  	this.notification.showSuccessMessage('Aisle added successfully');
  	form.get('name').reset();
  	form.get('coordinator').reset();
  }

}
