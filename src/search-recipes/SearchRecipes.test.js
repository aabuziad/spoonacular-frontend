import { render, screen } from '@testing-library/react';
import SearchRecipes from "./SearchRecipes";

test('on initial render, the logo and search bar should appear', () => {
    // Arrange
    render(<SearchRecipes />);
    // Act
    const logo = screen.getByText(/Spoonacular/);
    const searchBarInput = screen.getByPlaceholderText(/Looking for a recipe?/i);
    // Assert
    expect(logo).toBeInTheDocument();
    expect(searchBarInput).toBeInTheDocument();
});

