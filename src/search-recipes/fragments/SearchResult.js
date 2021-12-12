import React from "react";
import SearchResultItem from "./SearchResultItem";

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.handleRecipeClick = this.handleRecipeClick.bind(this);
    }

    handleRecipeClick(recipeId) {
       this.props.onRecipeClick(recipeId);
    }

    render() {

        const resultItems = [];

        this.props.recipes.forEach(recipe => {
            resultItems.push(<SearchResultItem recipe={recipe} key={recipe.id} onRecipeClick={this.handleRecipeClick} />);
        });

        let classes = 'search-result-items';
        const invisible = (resultItems.length === 0) ? 'invisible' : '';
        classes += invisible;
        return (
            <div className='search-result'>
                <div className={classes}>
                    {resultItems}
                </div>
            </div>
        );
    }
}

export default SearchResult;
