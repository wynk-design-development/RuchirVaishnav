import { Component, OnInit } from '@angular/core';

import myGlobals = require("../../assets/globals");

@Component({
  selector: 'awb-readme',
  styles: [require('./custdetails.component.sass').toString()],
  templateUrl: './custdetails.component.html',
})
export class CustDetailsComponent implements OnInit {

  public custDetails: any;
  private data: any[];
  private selectedEntities: any[];
  public pageTitle: string;

  constructor() {}

  public ngOnInit(): void {
    this.custDetails = myGlobals.customerDetails;
    this.data = myGlobals.customerDetails;
    this.pageTitle = 'Customer Details';
  }

  public setSelectedEntities($event: any) {
    this.selectedEntities = $event;
  }
}
