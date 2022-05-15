import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

//components
import Header from "./components/Header";

//pages
import Home from "./pages/Home";
import VolcanoList from "./pages/VolcanoList";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/VolcanoList" element={<VolcanoList />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
