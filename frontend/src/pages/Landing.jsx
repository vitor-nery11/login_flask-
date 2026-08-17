import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Landing = () => {
  return (
    <div className="container flex-center min-h-screen" style={{ minHeight: 'calc(100vh - 80px)' }}>
      <div className="glass-panel text-center" style={{ maxWidth: '600px', width: '100%' }}>
        <h1 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary-color)' }}>
          Welcome to LoginSystem
        </h1>
        <p className="mb-6" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
          A premium, responsive, and secure authentication flow built with React and Vite. Get started by logging in or creating a new account.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
          <Link to="/login">
            <Button variant="primary">Login to Account</Button>
          </Link>
          <Link to="/register">
            <Button variant="secondary">Create Account</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
