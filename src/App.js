import './App.css';
import React from "react";
import SearchRecipes from "./search-recipes/SearchRecipes";
import SpoonacularApiClient from "./common/SpoonacularApiClient";
import RecipeInfo from "./recipe-info/RecipeInfo";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recipeId: 0,
            recipeInfo: undefined
        };
        this.handleRecipeClick = this.handleRecipeClick.bind(this);
    }

    handleRecipeClick(recipeId) {
        this.setState({
            recipeId: recipeId
        });

        this.loadRecipeInfo(recipeId);
    }

    loadRecipeInfo(recipeId) {
        if(recipeId === 0){
            this.setState({
                recipeInfo: {}
            });
            return;
        }

        const client = new SpoonacularApiClient();
        client.GetRecipeInformation(recipeId).then((recipeInfo) => {
            this.setState({
                recipeInfo: recipeInfo
            });
        });
    }

    render() {
        return (
            <div className="app">
                <SearchRecipes onRecipeClick={this.handleRecipeClick}/>
                <RecipeInfo recipeInfo={this.state.recipeInfo} />
            </div>
        );
    }
}



export default App;
