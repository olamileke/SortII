import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddAisleComponent } from './components/add-aisle/add-aisle.component';
import { ViewAisleComponent } from './components/view-aisle/view-aisle.component';
import { AddStewardComponent } from './components/add-steward/add-steward.component';
import { ViewStewardsComponent } from './components/view-stewards/view-stewards.component';
import { GetCrackingComponent } from './components/get-cracking/get-cracking.component';
import { PostingsComponent } from './components/postings/postings.component';
import { StewardComponent } from './components/steward/steward.component';
import { ErrorComponent } from './components/error/error.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    SidebarComponent,
    AddAisleComponent,
    ViewAisleComponent,
    AddStewardComponent,
    ViewStewardsComponent,
    GetCrackingComponent,
    PostingsComponent,
    StewardComponent,
    ErrorComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
