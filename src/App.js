import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

import Home from './pages/home';
import Explore from './pages/explore';
import Contests from './pages/contests';
import Account from './pages/account';
import Store from './pages/store';
import Leaderboard from './pages/leaderboard';
import Login from './pages/login';
import Submission from './pages/submission';

function ProtectedRoute({ user, children }) {
  return user ? children : <Navigate to="/login" />;
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter basename="/chicora">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contests" element={<Contests />} />
        <Route path="/account" element={<Account />} />
        <Route path="/store" element={<Store />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/submission" element={<ProtectedRoute user={user}><Submission /></ProtectedRoute>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;


