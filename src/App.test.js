import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import {Profile} from "./pages/Profile";
import {get_user} from "./database/users";
import {fetch_badges, fetch_badge_image} from "./database/badges";
import { useUserState }from './database/users';

jest.mock("./database/users");
jest.mock("./database/users");
jest.mock("./database/badges");
jest.mock('./database/users');

const userData = {
    userName: "Test User",
    userEmail: "test@test.com",
    userPhoto: "https://lh3.googleusercontent.com/a/AATXAJxFQKnbNAhsh9TI9W0-3ioPuK1muJ3r4RWMSl2q=s96-c",
    userPhoneNumber: "+12345678901"
}

test('renders the welcome page', () => {
    useUserState.mockReturnValue([null]);
    render(<App />);
    const linkElement = screen.getByText(/Welcome to Fountain/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders the profile page',  () => {
    get_user.mockReturnValue(Promise.resolve(userData));
    fetch_badges.mockReturnValue(Promise.resolve({}));
    fetch_badge_image.mockReturnValue(Promise.resolve({}));
    render(<Profile />);
    const linkElement = screen.getByText(/Your Name/i);
    expect(linkElement).toBeInTheDocument();
});
