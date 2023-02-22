import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../model/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('bananas', 10)
  ];

  //action stream
  private ingredientsSelectedSubject = new BehaviorSubject<Ingredient[]>(this.ingredients);
  ingredientsSelectedAction$ = this.ingredientsSelectedSubject.asObservable();

  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingredientsSelectedSubject.next(this.ingredients.slice());
  }

  addIngredients(ings: Ingredient[]) {
    this.ingredients.push(...ings);
    this.ingredientsSelectedSubject.next(this.ingredients.slice());
  }
}
