import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  pageTitle : string= "Child component";
  childDataOnClick: string = "";

  @Input()
  parentDataInChild!: string;

  @Output() 
  childClicked: EventEmitter<string> = 
  new EventEmitter<string>();

  onClick(childData: string): void {
    this.childDataOnClick=childData;
  }

  onChildClicked(value: string): void {
    this.childClicked.emit(value);
  }
}
