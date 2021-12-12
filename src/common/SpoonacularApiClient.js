
const apiKey = "2dba1308a73d4a21819c8b10711205bc";

class SpoonacularApiClient {

    SearchRecipes(query) {
        return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => data.results);
    }

    GetRecipeInformation(recipeId) {
        return fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    }
}

export default SpoonacularApiClient;
