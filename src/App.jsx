import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Fariz from "./page/fariz";
import Fahmi from "./page/fahmi";
import Bagas from "./page/bagas";

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