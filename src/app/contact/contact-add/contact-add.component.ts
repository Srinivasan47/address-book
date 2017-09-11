import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {
  groupList=[{"id":1,"value":"Home"},{"id":2,"value":"VIP"},{"id":3,"value":"Friends"},{"id":4,"value":"Co-worker"}];
  constructor() { }

  ngOnInit() {
  }

  selectedGroup(value){
  	console.log(value);
  }

}
