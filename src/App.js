import logo from "./logo copy.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        Coded by Rita Rudzite open-sourced on{" "}
        <a href="https://github.com/RuRi-Code-Cloud/dictionary">GitHub</a>{" "}
      </footer>
    </div>
  );
}

export default App;
