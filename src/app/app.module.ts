import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdButton } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { CustDetailsComponent } from './custdetails/custdetails.component';
import { OrderHistComponent } from './orderhist/orderhist.component';

import { DataTableModule } from 'ng2-data-table';

import { EmailValidation } from './providers/emailValidation.pipe'

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    CustDetailsComponent,
    OrderHistComponent,
    EmailValidation
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing,
    DataTableModule
  ],
  providers: [
    EmailValidation
  ]
})
export class AppModule { }
