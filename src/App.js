import React, { useState } from "react";
import "./styles.css";

//components
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <h1>Volcanoes of the world</h1>
      </header>
    </div>
  );
}
