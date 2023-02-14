import { ShoppingListService } from './../../shared/shopping-list.service';
import { Ingredient } from 'src/app/model/ingredient.model';
import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  ngOnInit(): void {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(ingredient);
  }
}
