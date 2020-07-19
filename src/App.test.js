import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock("global.fetch")

fetch.get.mockResolvedValue({data:[{mission_name: "Launch"},{mission_name: "Rocket"}]})

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("List of SpaceX Missions :");
  expect(linkElement).toBeInTheDocument();
});
