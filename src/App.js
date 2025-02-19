import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Explore from './pages/explore';

function App() {
  return (
    <BrowserRouter basename="/chicora">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

