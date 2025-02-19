import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Explore from './pages/explore';
import Contests from './pages/contests';
import Account from './pages/account';

function App() {
  return (
    <BrowserRouter basename="/chicora">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contests" element={<Contests />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

