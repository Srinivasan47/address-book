import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { DropdownComponent } from './custom/dropdown.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactAddComponent } from './contact-add/contact-add.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  declarations: [ContactComponent, DropdownComponent, ViewComponent, EditComponent, ContactListComponent, ContactViewComponent, ContactEditComponent, ContactAddComponent]
})
export class ContactModule { }
