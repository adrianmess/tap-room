import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Recipe Box!';

  sushiDirections = 'Place your desired ingredients onto the rice. I’ve got salmon, avocado, and cream cheese (I know, I know. But Philly-style rolls are my favorite';

  sushiRecipe = `* 6 sheets sushi seaweed` + ' * 1 batch prepared sushi rice' + ' * 1/2 lb sushi-grade raw salmon, or desired raw fish of choice.' + ' * 1 avocado, sliced' + ' * soy sauce, for serving';

  recipe: Recipe[] = [
   new Recipe('Sushi', this.sushiRecipe, this.sushiDirections),
   new Recipe('Stuffed Peppers', ['peppers'], ['bake']),
   new Recipe('Speghetti', ['noodles'], ['boil'])
 ];
}
