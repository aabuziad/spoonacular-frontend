# Spoonacular Recipe Front-end

## features
* Search for a recipe
* Read a specific recipe details

## Components Structure

* App (states: recipeId, recipeInfo)
    * SearchRecipes (states: filterText, recipes)
        * SearchBar
        * SearchResult
            * SearchResultItem
    * RecipeInfo
        * RecipeInstructions
        * RecipeIcons

## Common Services
 * SpoonacularApiClient

## Available scripts

### `npm install`

Install the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Runs the tests

## Future Improvements
* Read more about test libraries then Handle edge cases
* Read more about states to remove (recipes, recipeInfo) states if possible
* Enhance UI/UX
* Do TDD for future improvements
* Add more features
