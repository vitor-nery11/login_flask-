import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import api from '../services/api';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/profile');
        setUser(response.data.user);
      } catch (err) {
        // If unauthorized or error, redirect to login
        localStorage.removeItem('token');
        navigate('/login');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (isLoading) {
    return <div className="container flex-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container" style={{ paddingTop: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 300 }}>Dashboard</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/profile">
            <Button variant="secondary">My Profile</Button>
          </Link>
          <Button variant="ghost" onClick={handleLogout}>Logout</Button>
        </div>
      </div>

      <div className="glass-panel text-center" style={{ padding: '4rem 2rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 300 }}>Welcome, {user?.firstName}</h3>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          You have successfully logged in via the Flask API. Your session is protected by JWT authentication.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
