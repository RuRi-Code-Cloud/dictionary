import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";
import background from "./background.jpg";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
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
