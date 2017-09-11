import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { ContactService } from './shared/service/contact.service';
import { AppRoutingModule } from './app-routing';
@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ContactModule,
    HomeModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
