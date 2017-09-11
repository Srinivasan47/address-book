import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {

  id:number=1;
  constructor(private route:Router) { }

  ngOnInit() {
  }
  editContact(id){
  	//this.route.navigate(['edit', id]);
  }
  deleteContact(id){
  	console.log("Delete contact"+id);
  }

}
