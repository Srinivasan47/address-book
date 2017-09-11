import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
export class DropdownValue {
  id:number;
  value:string;
  isSelect:boolean;

  constructor(value:string,id:number,isSelect:boolean) {
    this.id = id;
    this.value = value;
    this.isSelect=isSelect;
  }
}
@Component({
  selector: 'group-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class DropdownComponent implements OnInit {
@Input() groups: DropdownValue[];
@Input() value: string[];
@Output() select: EventEmitter<any>;
selected:string;
option:boolean;
constructor(private elementRef:ElementRef) {
    this.select = new EventEmitter();
  }
  ngOnInit() {
  	this.option=true;
  	if(this.selected&&this.selected!=''){
  		this.selected="2 Group Selected";
  	}
  	else{
  	this.selected="Select Group";
  	}
  }
  onClick(event) {
   if (!this.elementRef.nativeElement.contains(event.target)) // or some similar check
     this.showOption();
  }
  showOption(){
  	this.option=!this.option;
  }
  getGroupValue(group){
  	this.select.emit(group);
  }
}
