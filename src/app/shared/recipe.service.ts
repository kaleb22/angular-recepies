import { Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';
import { Recipe } from '../model/recipe.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private slService: ShoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe(
      'Cheeseburguer',
      'A delecious burguer',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cheeseburger.png/1024px-Cheeseburger.png',
      [
        new Ingredient('meat', 1),
        new Ingredient('cheese', 2),
        new Ingredient('letucce', 1),
        new Ingredient('bread', 1)
      ]
    ),
    new Recipe(
      'Carbonara',
      'the most incredible dish ever made',
      'https://cadareceita.com.br/wp-content/uploads/2020/09/carbonara-cadareceita-1.jpg',
      [
        new Ingredient('pasta', 1),
        new Ingredient('eggs', 3),
        new Ingredient('bacon', 1)
      ]
    )
  ];

  getRecipes() {
    // with slice, a copy of the original array will be returned and not the reference to the recipe array itself.
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ings: Ingredient[]) {
    this.slService.addIngredients(ings);
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }
}
