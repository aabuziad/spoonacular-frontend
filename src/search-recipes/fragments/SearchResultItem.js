import React from "react";

class SearchResultItem extends React.Component {

    constructor(props) {
        super(props);

        this.handleRecipeClick = this.handleRecipeClick.bind(this);
    }

    handleRecipeClick() {
        this.props.onRecipeClick(this.props.recipe.id);
    }

    render() {
        const recipe = this.props.recipe;
        return (
            <div className="search-result-item" onClick={this.handleRecipeClick}>
                <img src={recipe.image} className="sm-recipe-image" alt={recipe.title}/> <b>{recipe.title}</b>
            </div>
        );
    }
}

export default SearchResultItem;
