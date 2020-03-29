import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  useAttendance:boolean = true;
  @Output() attendanceUpload = new EventEmitter();

  constructor(private fb:FormBuilder, private notification:NotificationService, private detail:DetailService) { }

  ngOnInit() {

  	this.stewardForm = this.fb.group({
  		name:['James', [Validators.required, Validators.minLength(5)]],
  		status:['Old', [Validators.required]]
  	});
  }


  addSteward(form:FormGroup):void { 

     if(this.detail.posted) {

        this.notification.showErrorMessage('Posting completed!');
        return;
	  }
	  
	  if(!this.validation(form.get('name').value)) {
		return;
	  }

      let steward = {name:'', status:''};
      steward['name'] = form.get('name').value;
      steward['status'] = form.get('status').value;

      this.detail.allStewards.push(steward);

      if(steward['status'] == 'Old') {

          this.detail.oldStewards.push(steward);
      }
      else {

          this.detail.newStewards.push(steward);
      }

      this.notification.showSuccessMessage('Steward Added Successfully');
      form.get('name').reset();
  }  


  validation(name:string):boolean {
	  if(this.useAttendance) {
		if(this.detail.chaplaincyAttendance.length == 0) {
			this.attendanceUpload.emit();
			return false;
		}

		return this.checkAttendance(name);
	  }

	  return true;
  }

  // checking if the entered name is in the uploaded attendance
  checkAttendance(name:string):boolean {
	let names = name.split(' ');

	if(names.length == 1) {
		this.notification.showErrorMessage('Absent from chaplaincy meeting!');
		return false;
	}

	if(this.detail.chaplaincyAttendance.includes(name)) {
		return true;
	}

	if(this.detail.chaplaincyAttendance.includes(names[1] + ' ' + names[0])) {
		return true;
	}

	this.notification.showErrorMessage('Absent from chaplaincy meeting!');
	return false;
  }

  toggleUseAttendance():void {
	  this.useAttendance = !this.useAttendance;
  }

}
