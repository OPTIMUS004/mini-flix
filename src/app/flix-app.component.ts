import { Component } from '@angular/core';

@Component({
  selector: 'flix-app',
  template: 	`
  		<nav-bar></nav-bar>
  		<router-outlet></router-outlet>
  `
})
export class FlixAppComponent {
  title = 'mini-flix';
}
