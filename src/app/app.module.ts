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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    SidebarComponent,
    AddAisleComponent,
    ViewAisleComponent,
    AddStewardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
