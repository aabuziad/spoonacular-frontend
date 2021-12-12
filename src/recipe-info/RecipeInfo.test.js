import { render, screen } from '@testing-library/react';
import RecipeInfo from "./RecipeInfo";

test('on initial render, the recipe info should not render', () => {
    // Arrange
    render(<RecipeInfo />);
    // Act
    const recipeInfo = screen.queryByTestId('recipe-info');
    // Assert
    expect(recipeInfo).toBeNull();
});
