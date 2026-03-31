import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Fariz from "./page/Fariz";
import Fahmi from "./page/Fahmi";
import Bagas from "./page/Bagas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fariz" element={<Fariz />} />
      <Route path="/fahmi" element={<Fahmi />} />
      <Route path="/bagas" element={<Bagas />} />
    </Routes>
  );
}

export default App;