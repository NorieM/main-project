import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Test description', 'https://www.cookipedia.co.uk/wiki/images/d/d4/Boulangere_potatoes_recipe.jpg'),
    new Recipe('Test recipe', 'Test description', 'https://www.cookipedia.co.uk/wiki/images/d/d4/Boulangere_potatoes_recipe.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
