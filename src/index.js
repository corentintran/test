import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//pages
import App from "./App";
import VolcanoList from "./pages/VolcanoList";
import Login from "./pages/Login";
import Register from "./pages/Register";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/VolcanoList" element={<VolcanoList />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
