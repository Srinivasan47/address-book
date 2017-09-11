import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  editContact(id){
  	this.route.navigate(['/edit', id]);
  }
  deleteContact(id){
  	console.log("Delete contact"+id);
  }
}
