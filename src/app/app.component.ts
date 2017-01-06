import { Component } from '@angular/core';
import { TestComponent } from './test.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'I changed it!'; 
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado', 'Jay'];
}
