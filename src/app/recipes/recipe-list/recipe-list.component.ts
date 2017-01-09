import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
	selector: 'fa-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('Paneer Tikka', 'Very hot and Tasty Sizler', 'https://i.ytimg.com/vi/LSfU5eVaAF4/maxresdefault.jpg', []);

		new Recipe('Prawn', 'Very hot and Tasty Prawn Sizler', 'http://im.whatshot.in/event/2015/Jun/1434696706-tiger-prawn-with-carrot-french-beans.jpg', []);
	];
	@Output() recipeSelected = new EventEmitter<Recipe>();
	/*recipe = new Recipe('Dummy Name', 'Dummy Description', 'http://ersuk.co.uk/ekmps/shops/express2011/images/female-tailor-dummy-with-tripod-base-round-top-511-p.jpg');
*/
  constructor() { }

  ngOnInit() {
  }

	onSelected(recipe: Recipe){
		this.recipeSelected.emit(recipe);
	}
}
