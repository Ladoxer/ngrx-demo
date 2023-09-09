import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    hello..
    <app-counter></app-counter>
    <router-outlet></router-outlet>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'ngrx-demo';
}
