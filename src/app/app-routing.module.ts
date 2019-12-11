import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { ErrorComponent } from './components/error/error.component';

const routes:Routes=[
						{path:'', component:HomeComponent},
						{path:'dashboard', component:MainComponent},
						{path:'**', component:ErrorComponent}
					]

@NgModule({
  imports: [
  	RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
