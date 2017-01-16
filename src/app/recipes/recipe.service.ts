import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from './ingredient';

@Injectable()
export class RecipeService {
	private recipes: Recipe[] = [
		new Recipe('Paneer Tikka', 'Very hot and Tasty Sizler', 'https://i.ytimg.com/vi/LSfU5eVaAF4/maxresdefault.jpg', [
			new Ingredient('Chicken', 2),
			new Ingredient('Veg Fry', 10)
			]),
 
		new Recipe('Prawn', 'Very hot and Tasty Prawn Sizler', 'http://im.whatshot.in/event/2015/Jun/1434696706-tiger-prawn-with-carrot-french-beans.jpg', [])
	];
  constructor() { }

  getRecipes(){
		return this.recipes;
  }

	getRecipe(id: number){ 
		return this.recipes[id];
	}

	deleteRecipe(recipe: Recipe){
		this.recipes.splice(this.recipes.indexOf(recipe), 1);
	}

}
