import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
	selector: 'fa-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [];
	recipe = new Recipe('Dummy Name', 'Dummy Description', 'http://ersuk.co.uk/ekmps/shops/express2011/images/female-tailor-dummy-with-tripod-base-round-top-511-p.jpg');

  constructor() { }

  ngOnInit() {
  }

}
