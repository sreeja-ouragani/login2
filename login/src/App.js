import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // This function updates the state to simulate login/logout
  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <Routes>
        {/* Redirect to HomePage if authenticated, otherwise to Login */}
        <Route path="/" element={isAuthenticated ? <HomePage onLogout={handleLogout} /> : <Navigate to="/login" />} />

        {/* Login Route */}
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />

        {/* Protecting other pages to require authentication */}
        <Route path="/page1" element={isAuthenticated ? <Page1 /> : <Navigate to="/login" />} />
        <Route path="/page2" element={isAuthenticated ? <Page2 /> : <Navigate to="/login" />} />
        <Route path="/page3" element={isAuthenticated ? <Page3 /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
