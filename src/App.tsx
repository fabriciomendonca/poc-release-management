import React from "react";
import "./App.css";
import { Link } from "./Components/Link";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Fixing some stuff after a breaking change.</p>
      </header>
      <main>
        <Link url="https://www.google.com" text="Google" />
      </main>
    </div>
  );
}

export default App;
