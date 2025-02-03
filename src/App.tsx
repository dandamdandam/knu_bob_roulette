import Bob_roulette from "./components/bob_roulette";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Bob the Roulette</h1>
        <p>점메추 해줘</p>
      </header>
      <Bob_roulette />
    </div>
  );
}

export default App;
