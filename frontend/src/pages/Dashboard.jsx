import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, clear auth token here
    navigate('/login');
  };

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Dashboard</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/profile">
            <Button variant="secondary">My Profile</Button>
          </Link>
          <Button variant="ghost" onClick={handleLogout}>Logout</Button>
        </div>
      </div>

      <div className="glass-panel text-center" style={{ padding: '4rem 2rem' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Welcome to your Dashboard</h3>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          You have successfully logged in. This is a protected route that would normally require a valid authentication token.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
