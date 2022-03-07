import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import {Profile} from "./pages/Profile";
import {useParams} from 'react-router-dom';

jest.mock('../node_modules/react-router-dom');

const mockUser = {
  "uid": "0DiifPJmD5fXTgfyjMrpjVWFW3U2"
};

test('renders the welcome page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Fountain/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the profile page', () => {
  useParams.mockReturnValue(mockUser);
  render(<Profile />);
  const linkElement = screen.getByText(/Alejandro Malavet/i);
  expect(linkElement).toBeInTheDocument();
});
