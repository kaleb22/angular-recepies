import { Subscription } from 'rxjs';
import { ShoppingListService } from './../../shared/shopping-list.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  constructor(private shoppingListService: ShoppingListService) { }

  ingredients: Ingredient[];
  sub: Subscription;

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.sub = this.shoppingListService.ingredientsChanged.subscribe(
      ingredients => {
        this.ingredients = ingredients;
      }
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
