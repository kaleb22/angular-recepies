import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('test', 'testing component', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'),
    new Recipe('test 2', 'testing component 111111', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg')
  ];

  getRecipes() {
    // with slice, a copy of the original array will be returned and not the reference to the recipe array itself.
    return this.recipes.slice();
  }
}
