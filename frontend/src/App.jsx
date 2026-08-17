import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import ThemeToggle from './components/ThemeToggle';
import './App.css'; // Optional App specific layout if needed

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <header className="app-header">
            <div className="container flex-header">
              <div className="logo-placeholder">LoginSystem</div>
              <ThemeToggle />
            </div>
          </header>
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
