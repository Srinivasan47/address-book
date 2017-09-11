import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactAddComponent} from './contact-add/contact-add.component';
import {ContactEditComponent} from './contact-edit/contact-edit.component';
import {ContactViewComponent} from './contact-view/contact-view.component';
const routes: Routes = [
	{path:'contact', component: ContactComponent, children:[
	{path:'', redirectTo: 'list', pathMatch:'full'},	
	{path:'list', component:ContactListComponent},	
	{path:'add', component:ContactAddComponent},
	{path:'edit/:id', component:ContactEditComponent},
	{path:'view/:id', component:ContactViewComponent}]}
	];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
