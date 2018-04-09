import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[] = [
 	new Recipe('A Test Recipe', 'This is simply a test', 'https://pixabay.com/get/ea37b8062bf4083ed1584d05fb1d4e97e07ee3d21cac104497f3c370a1ecb3bd_340.jpg')

 ];
  constructor() { }

  ngOnInit() {
  }

}
