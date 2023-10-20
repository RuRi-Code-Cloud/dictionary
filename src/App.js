import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";
import "./Dictionary.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <h1 className="heading">Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>Coded by Rita Rudzite</footer>
    </div>
  );
}

export default App;
