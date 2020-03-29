import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import * as XLSX from 'xlsx';

import { DetailService } from '../../services/detail.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @ViewChild('fileInput') fileInput;
  @Output() uploaded = new EventEmitter();
  hasFile:boolean = false;
  file:File;
  fileName:string = '';
  names:string[] = [];
  constructor(private detail:DetailService, private notif:NotificationService) { }

  ngOnInit() {
  }

  clickFileInput():void {
    this.fileInput.nativeElement.click();
  }

  validateFile(files:any[]) {
    let file = files[0];
    // Getting the last index in the split array which should correspond to the file type
    let idx = file.name.split('.').length - 1;

    if(file.name.split('.')[idx] != 'xlsx') {
	  this.notif.showErrorMessage('File format not supported!');
	  return;
	}
	
	if(file.size > 7000000) {
		this.notif.showErrorMessage('File too large!');
		return;
	}

	this.formatXLSXToArray(file);
  }

  formatName(name:string):string {
	if(name.length > 25) {
		return name.slice(0,23) + '...';		
	}

	return name;
  }


  formatXLSXToArray(file:File) {
	let reader = new FileReader();
	let workbook;
	reader.onloadend = e => {
		// extracting the names from the uploaded excel file
		let result = reader.result as ArrayBuffer;
		let data = new Uint8Array(result);
		workbook = XLSX.read(data, {type:'array'});
		let sheetName = workbook['SheetNames'][0];
		if(this.generateNames(workbook['Sheets'][sheetName])) {
			this.fileName = this.formatName(file.name);
			this.hasFile = !this.hasFile;
		}
	};	
	reader.readAsArrayBuffer(file);
  }

  generateNames(sheet:any):boolean {
	let records:any[] = Object.values(sheet);
	let start = records[0].split(':')[0];
	let end = records[0].split(':')[1];

	if(start.slice(0,1) != end.slice(0,1)) {
		this.notif.showErrorMessage('Excel sheet must be single columned!');
		return false;
	}

	this.names = records.map(record => {
		if(record.hasOwnProperty('v')) {
			return record['v'].trim();
		}
	}).filter(name => {
		if(name != 'name' && name != 'undefined') {
			return name;
		}
	});
	return true;
  }

  removeFile():void {
	  this.hasFile = !this.hasFile;
  }

  setAttendance():void {
	  this.detail.chaplaincyAttendance = this.names;
	  this.notif.showSuccessMessage('Uploaded successfully!');
	  this.uploaded.emit();
  }

}
