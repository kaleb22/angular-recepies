import { map } from 'rxjs';
import { ShoppingListService } from './../../shared/shopping-list.service';
import { Component } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  constructor(private shoppingListService: ShoppingListService) { }

  ingredientsList$ = this.shoppingListService.ingredientsSelectedAction$;

}
