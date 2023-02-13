import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  pageTitle : string= "Parent component";
  parentDataOnClick: string = "";
  childData: string ="";
  
  onClick(parentData: string): void {
    this.parentDataOnClick=parentData;
  }

  displayChildData(childData: string) {
    this.childData=childData;
  }
}

