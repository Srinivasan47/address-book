import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  id:number=1;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  viewContact(){
  		this.router.navigate(["/contact/view",this.id]);
  }
}
