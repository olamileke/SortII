import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NotificationService } from '../../services/notification.service';
import { DetailService } from '../../services/detail.service';

@Component({
  selector: 'app-add-steward',
  templateUrl: './add-steward.component.html',
  styleUrls: ['./add-steward.component.css']
})
export class AddStewardComponent implements OnInit {

  stewardForm:FormGroup;

  constructor(private fb:FormBuilder, private notification:NotificationService, private detail:DetailService) { }

  ngOnInit() {

  	this.stewardForm=this.fb.group({
  		name:['', [Validators.required]],
  		level:['100', [Validators.required]],
  		status:['Old', [Validators.required]]
  	});
  }


  addSteward(form:FormGroup):void {

      let steward={};

      steward['name']=form.get('name').value;
      steward['level']=form.get('level').value;
      steward['status']=form.get('status').value;

      this.detail.stewards.push(steward);
      this.notification.showSuccessMessage('Steward Added Successfully');
      form.get('name').reset();
  }  

}
