import { Component } from '@angular/core';
import { Homepage } from './homepage/homepage';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Homepage],
  template: `<app-homepage></app-homepage>`,
  styles: []
})
export class AppComponent {}
