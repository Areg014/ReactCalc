import React from "react";
import Home from "./components/Home";
import Calc from "./components/Calc";
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calc" element={<Calc />} />
        </Routes>
      </div>
    );
}

export default App;