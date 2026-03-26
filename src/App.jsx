import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Fariz from "./page/fariz";
import Fahmi from "./page/Fahmi";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fariz" element={<Fariz />} />
      <Route path="/fahmi" element={<Fahmi />} />
    </Routes>
  );
}

export default App;