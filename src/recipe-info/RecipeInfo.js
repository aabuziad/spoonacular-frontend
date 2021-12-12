import React from "react";
import RecipeIcons from "./fragments/RecipeIcons";
import RecipeInstructions from "./fragments/RecipeInstructions";

class RecipeInfo extends React.Component {
    render() {
        const recipeInfo = this.props.recipeInfo;
        if(recipeInfo === undefined)
            return ("");


        return (
            <div className="recipe-info" data-testid="recipe-info">
                <h1>{recipeInfo.title}</h1>
                <div className="flex-container">
                    <div className="recipe-summary" dangerouslySetInnerHTML={{__html: recipeInfo.summary}}>
                    </div>
                    <div>
                        <img src={recipeInfo.image} alt={recipeInfo.title} />
                        <RecipeIcons recipeInfo={recipeInfo} />
                    </div>
                </div>
                <RecipeInstructions recipeInfo={recipeInfo} />
            </div>
        );
    }
}

export default RecipeInfo;
