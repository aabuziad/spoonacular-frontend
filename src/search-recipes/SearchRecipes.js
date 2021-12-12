import React from "react";
import SpoonacularApiClient from "../common/SpoonacularApiClient";
import SearchBar from "./fragments/SearchBar";
import SearchResult from "./fragments/SearchResult";

class SearchRecipes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            recipes: []
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleRecipeClick = this.handleRecipeClick.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
        this.loadSearchRecipes(filterText);
    }

    handleRecipeClick(recipeId) {
        this.setState({
            filterText: '',
            recipes: []
        });
        this.props.onRecipeClick(recipeId);
    }

    loadSearchRecipes(filterText) {
        if(filterText === ""){
            this.setState({
               recipes: []
            });
            return;
        }

        const client = new SpoonacularApiClient();
        client.SearchRecipes(filterText).then((recipes) => {
            this.setState({
                recipes: recipes
            });
        });
    }


    render() {
        return (
            <div>
                <h1 className="logo">Spoonacular</h1>
                <SearchBar filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange} />
                <SearchResult recipes={this.state.recipes} onRecipeClick={this.handleRecipeClick} />
            </div>
        );
    }
}

export default SearchRecipes;
