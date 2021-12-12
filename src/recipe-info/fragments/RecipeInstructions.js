import React from "react";

class RecipeInstructions extends React.Component {

    render() {
        return(
            <div>
                <h2>Instructions</h2>
                <div className="recipe-instructions" dangerouslySetInnerHTML={{__html: this.props.recipeInfo.instructions}}>
                </div>
            </div>
        )
    }
}

export default RecipeInstructions;
