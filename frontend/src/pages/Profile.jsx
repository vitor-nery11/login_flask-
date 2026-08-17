import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import api from '../services/api';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/profile');
        setUser(response.data.user);
      } catch (err) {
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

  // Get initials
  const initials = user ? `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase() : '??';

  return (
    <div className="container" style={{ paddingTop: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 300 }}>My Profile</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/dashboard">
            <Button variant="secondary">Back to Dashboard</Button>
          </Link>
          <Button variant="ghost" onClick={handleLogout}>Logout</Button>
        </div>
      </div>

      <div className="glass-panel" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ 
            width: '80px', 
            height: '80px', 
            borderRadius: '50%', 
            backgroundColor: 'var(--primary-color)',
            color: 'var(--primary-ink)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            fontWeight: 600
          }}>
            {initials}
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.25rem 0', fontWeight: 300 }}>{user?.firstName} {user?.lastName}</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{user?.email}</p>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '0.85rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Account Details
          </h4>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: '0 0 0.25rem 0' }}>First Name</p>
              <p style={{ fontWeight: 400, margin: 0, fontSize: '1.1rem' }}>{user?.firstName}</p>
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: '0 0 0.25rem 0' }}>Last Name</p>
              <p style={{ fontWeight: 400, margin: 0, fontSize: '1.1rem' }}>{user?.lastName}</p>
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: '0 0 0.25rem 0' }}>User ID</p>
              <p style={{ fontWeight: 400, margin: 0, fontSize: '1.1rem' }}>#{user?.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
