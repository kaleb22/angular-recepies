import { RecipeService } from './../../shared/recipe.service';
import { Recipe } from 'src/app/model/recipe.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }


  recipe: Recipe;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.recipe = this.recipeService.getRecipeById(+params['id']);
      }
    )
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.router.navigateByUrl('/shopping-list');
  }

}
