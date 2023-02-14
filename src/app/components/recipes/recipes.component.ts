import { RecipeService } from './../../shared/recipe.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {

  constructor(private recipeService: RecipeService) { }

  selectedRecipe: Recipe;
  sub: Subscription;

  ngOnInit(): void {
    this.sub = this.recipeService.recipeSelected.subscribe(
      recipe => {
        this.selectedRecipe = recipe;
      }
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
