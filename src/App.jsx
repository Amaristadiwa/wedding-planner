import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Card from './components/card/Card';
import Dashboard from './pages/Dashboard';
import Login from './pages/login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import VenueDetail from './pages/VenueDetail';
import InspirationLibrary from './pages/InspirationLibrary';
import Favorites from './pages/Favorites';

export default function App() {
  // Initialize user state from localStorage
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('user'));
  });

  return (
    <Routes>
      <Route path="/" element={<Card />} />
      {/* Pass setUser to Login so it can update user state */}
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
      <Route path="/venue/:id" element={<VenueDetail />} />
      <Route path="/inspiration" element={<InspirationLibrary />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
