import { Component } from '@angular/core';

// global styles
import '../styles';

@Component({
  // we will prefix all our selectors with "awb" in reference
  // to the initials of our project
  selector: 'awb-app',
  styles: [require('./app.component.sass').toString()],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = 'Dashboard Test';
  public navItems: Object = ['navItem1', 'navItem2', 'navItem3']
}
