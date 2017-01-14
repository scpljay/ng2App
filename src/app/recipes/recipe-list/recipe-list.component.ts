import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'fa-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [];

	@Output() recipeSelected = new EventEmitter<Recipe>();
	
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
		this.recipes = this.recipeService.getRecipes();
  }

	onSelected(recipe: Recipe){
		this.recipeSelected.emit(recipe);
	}
}
