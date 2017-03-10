import { Component, OnInit } from '@angular/core';
import myGlobals = require("../../assets/globals");

@Component({
  selector: 'awb-todo',
  styles: [require('./orderhist.component.sass').toString()],
  templateUrl: './orderhist.component.html',
})
export class OrderHistComponent implements OnInit {

  public pageTitle: string;
  private data: any[];
  private selectedEntities: any[];

  constructor() {}

  ngOnInit(){
    this.data = myGlobals.orderHistory;
    this.pageTitle = "Order History";
  }

  public setSelectedEntities($event: any) {
    this.selectedEntities = $event;
  }

}
