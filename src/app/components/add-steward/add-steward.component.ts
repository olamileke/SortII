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

  	this.stewardForm = this.fb.group({
  		name:['', [Validators.required, Validators.minLength(5)]],
  		status:['Old', [Validators.required]]
  	});
  }


  addSteward(form:FormGroup):boolean {

     if(this.detail.posted) {

        this.notification.showErrorMessage('Posting completed!');
        return false;
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

}
