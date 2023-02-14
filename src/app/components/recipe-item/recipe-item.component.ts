import { RecipeService } from './../../shared/recipe.service';
import { Recipe } from 'src/app/model/recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  @Input() recipe: Recipe;

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
