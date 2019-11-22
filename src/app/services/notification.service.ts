import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr:ToastrService) { }


  showSuccessMessage(message:string, title?:string):void {

  	this.toastr.success(message, title);
  }

  showErrorMessage(message:string, title?:string):void {

  	this.toastr.error(message, title);
  }

  showInfoMessage(message:string, title?:string):void {

  	this.toastr.info(message, title);
  }
  
}
