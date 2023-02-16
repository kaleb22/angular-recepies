import { RecipeService } from './../../shared/recipe.service';
import { Recipe } from 'src/app/model/recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) { }

  @Input() recipe: Recipe;

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.router.navigateByUrl('/shopping-list');
  }

}
