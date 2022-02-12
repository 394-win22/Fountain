import logo from './logo.svg';
import './App.css';
import {SignInButton} from "./components/users"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Fountain!
        </p>
        <SignInButton />
      </header>
    </div>
  );
}

export default App;
