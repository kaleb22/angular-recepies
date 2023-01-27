import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('bananas', 10)
  ];

  ngOnInit(): void {
  }

  onIngredientAdded(ing: Ingredient) {
    this.ingredients.push(ing);
  }

}
