import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("testing event", () => {
  test('should show search form and its button', () => {
    const { getByTestId } = render(<App/>)
    const searchInput = getByTestId("search-input")
    const searchButton = getByTestId("search-button")

    expect(searchInput).toBeInTheDocument()
    expect(searchButton).toBeInTheDocument()

    const query = "Pancake"
    fireEvent.change(searchInput, {target : { value: query }})
    expect(searchInput).toHaveValue(query)
    fireEvent.click(searchButton)
  })
})

