import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <ng-content></ng-content>
    <p>test works</p>
    <button *ngFor = "let hero of heroes">{{hero}}</button>
  `,
  styles: []
})
export class TestComponent implements OnInit, OnChanges {
	@Input() heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor() { 
	  this.log('Tour of Heroes 1');
  }

  ngOnChanges(){
	  this.log('Tour of Heroes 2');
  }
 
  ngOnInit() {  
	  this.log('Tour of Heroes 3');
  }

  private log(msg : string) {
    console.log(msg);  	
  }

}
