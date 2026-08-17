import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, clear auth token here
    navigate('/login');
  };

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>My Profile</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/dashboard">
            <Button variant="secondary">Back to Dashboard</Button>
          </Link>
          <Button variant="ghost" onClick={handleLogout}>Logout</Button>
        </div>
      </div>

      <div className="glass-panel" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ 
            width: '80px', 
            height: '80px', 
            borderRadius: '50%', 
            backgroundColor: 'var(--primary-color)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            fontWeight: 600
          }}>
            JD
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.25rem 0' }}>John Doe</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>test@example.com</p>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Account Details
          </h4>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: '0 0 0.25rem 0' }}>First Name</p>
              <p style={{ fontWeight: 500, margin: 0 }}>John</p>
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: '0 0 0.25rem 0' }}>Last Name</p>
              <p style={{ fontWeight: 500, margin: 0 }}>Doe</p>
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: '0 0 0.25rem 0' }}>Member Since</p>
              <p style={{ fontWeight: 500, margin: 0 }}>August 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
