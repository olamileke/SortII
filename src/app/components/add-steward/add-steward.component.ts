import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, of, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { NotificationService } from '../../services/notification.service';
import { DetailService } from '../../services/detail.service';

@Component({
  selector: 'app-add-steward',
  templateUrl: './add-steward.component.html',
  styleUrls: ['./add-steward.component.css']
})
export class AddStewardComponent implements OnInit {
	
  @Output() upload = new EventEmitter();
  stewardForm:FormGroup;
  useAttendance:boolean;
  autoSuggest:boolean;
  searchNames = new Subject<string>();
  similarNames$:Observable<string[]>;

  constructor(private fb:FormBuilder, private notification:NotificationService, private detail:DetailService) { }

  ngOnInit() {
	this.createFormGroup();
	this.createSimilarNames();
	this.determineCheckBoxState()
  }

  ngOnDestroy() {
	this.upload.emit('close');
  }
  
  determineCheckBoxState():void {
	this.detail.chaplaincyAttendance.length > 0 ? this.useAttendance = true : this.useAttendance = false;
	this.detail.totalStewards.length > 0 ? this.autoSuggest = true : this.autoSuggest = false;
  }

  createFormGroup():void {
	this.stewardForm = this.fb.group({
		name:['', [Validators.required, Validators.minLength(5)]],
		status:['Old', [Validators.required]]
	});
  }

  createSimilarNames():void {
	this.similarNames$ = this.searchNames.pipe(
	    debounceTime(300),
	    distinctUntilChanged(),
		switchMap((nm:string) => 
		nm == '' ? of([]) : of(this.detail.totalStewards.filter(name => {
				name = name.toLowerCase();
				if(name.includes(nm)) {
					return name;
				}
			}).slice(0,6))
    	))
  }

  search(name:string):void {
	if(!this.autoSuggest) {
		return;
	}
	name = name.toLowerCase();
	this.searchNames.next(name.toLowerCase());
  }

  setName(name:string) {
	this.stewardForm.get('name').setValue(name);
	this.searchNames.next('');
  }

  addSteward(form:FormGroup):void { 
    if(this.detail.posted) {
        this.notification.showErrorMessage('Posting completed!');
        return;
	}
	if(!this.validateAttendance(form.get('name').value)) {
		return;
	}
	if(!this.validateAutoSuggest()) {
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

  validateAttendance(name:string):boolean {
	if(this.useAttendance) {
		if(this.detail.chaplaincyAttendance.length == 0) {
		    this.notification.showErrorMessage('Upload chaplaincy attendance!');
			return false;
		}
		return this.checkAttendance(name);
	}
    return true;
  }

  validateAutoSuggest():boolean {
	if(this.autoSuggest) {
	   if(this.detail.totalStewards.length == 0) {
		    this.notification.showErrorMessage('Upload names of all stewards!');
			return false;
		}
	}
	return true;
  }

  // checking if the entered name is in the uploaded chaplaincy attendance
  checkAttendance(name:string):boolean {
	let names = name.split(' ');

	if(names.length == 1) {
		this.notification.showErrorMessage('Name and surname required!');
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
	if(this.detail.chaplaincyAttendance.length == 0) {
		this.upload.emit('Chaplaincy Attendance');
	}
  }

  toggleAutoSuggest():void {
	this.autoSuggest = !this.autoSuggest;
	if(this.detail.totalStewards.length == 0) {
		this.upload.emit('All Stewards');
	}
  }
}
