import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock, faDollarSign, faUsers} from "@fortawesome/free-solid-svg-icons";

class RecipeIcons extends React.Component {

    render() {
        const recipeInfo = this.props.recipeInfo;
        return(
            <div className="flex-container">
                <div className="recipe-icon">
                    <FontAwesomeIcon icon={faClock} size="2x"/>
                    <p>{recipeInfo.readyInMinutes}</p>
                </div>
                <div className="recipe-icon">
                    <FontAwesomeIcon icon={faUsers} size="2x"/>
                    <p>{recipeInfo.servings}</p>
                </div>
                <div className="recipe-icon">
                    <FontAwesomeIcon icon={faDollarSign} size="2x"/>
                    <p>{recipeInfo.pricePerServing}</p>
                </div>
            </div>
        );
    }
}

export default RecipeIcons;
