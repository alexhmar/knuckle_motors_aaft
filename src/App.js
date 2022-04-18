import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Bikes from "./Components/Bikes.js";
import Retro from "./Components/Retro.js";
import Naked from "./Components/Naked.js";
import Adventure from "./Components/Adventure.js";
import Future from "./Components/Future.js";
import "./Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/retro" element={<Retro />} />
          <Route path="/naked" element={<Naked />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/future" element={<Future />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
