import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth / window.innerHeight > 1.1) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={`landing-wrapper ${isOpen ? 'is-open' : ''}`}>
      <div className="stage">
        <div className="plate">
          <video 
            className="plate-video" 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto" 
            aria-hidden="true"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4" type="video/mp4" />
          </video>
        </div>

        <header className="topbar">
          <Link to="/" className="brand" aria-label="Home">
            <svg viewBox="0 0 31.5 48.5" width="100%" height="100%">
              <defs>
                <linearGradient id="bg1" x1="8" y1="0" x2="34.1" y2="28.9" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#9e9e9e" />
                  <stop offset=".28" stopColor="#a6a6a6" />
                  <stop offset=".34" stopColor="#a3a3a3" />
                  <stop offset=".40" stopColor="#3a3a3a" />
                  <stop offset=".55" stopColor="#414141" />
                  <stop offset=".60" stopColor="#7a7a7a" />
                  <stop offset=".68" stopColor="#8e8e8e" />
                  <stop offset=".80" stopColor="#a9a9a9" />
                  <stop offset=".95" stopColor="#c4c4c4" />
                  <stop offset="1" stopColor="#cccccc" />
                </linearGradient>
              </defs>
              <path d="M21.5 0 L21.5 19.5 L31.5 19.5 L31.5 29 L10 48.5 L10 28.5 L0.5 28.5 L0.5 18.5 Z" fill="url(#bg1)" />
              <rect x="0.5" y="18.5" width="9" height="10" fill="#fdfdfd" />
              <rect x="22" y="19.5" width="9.5" height="9.5" fill="#fdfdfd" />
            </svg>
          </Link>
          <nav className="links" aria-label="Primary">
            <Link to="/about">About</Link>
            <Link to="/features">Features</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <Link to="/login" className="pill pill-nav">
            <span>Get Started</span>
          </Link>
          <button className="burger" id="burger" onClick={toggleMenu} aria-expanded={isOpen} aria-label="Toggle Menu">
            <i></i>
            <i></i>
          </button>
        </header>

        <nav className="menu" id="menu" aria-hidden={!isOpen}>
          <div className="menu-inner">
            <p className="menu-eyebrow">Menu</p>
            <ul className="menu-list">
              <li><Link to="/about" onClick={closeMenu}>About</Link></li>
              <li><Link to="/features" onClick={closeMenu}>Features</Link></li>
              <li><Link to="/faq" onClick={closeMenu}>FAQ</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
            <div className="menu-foot">
              <Link to="/login" className="pill pill-cta" onClick={closeMenu}>
                <span>Get Started</span>
              </Link>
              <Link to="/register" className="ghost" onClick={closeMenu}>
                View Architecture
              </Link>
            </div>
          </div>
        </nav>

        <main className="hero">
          <h1 className="headline">
            <span>The Next Layer</span> <span>of Authentication</span>
          </h1>
          <p className="sub">
            <span>A secure, scalable, and seamless login infrastructure</span>
            <span>built with React and Flask.</span>
          </p>
          <div className="actions">
            <Link to="/login" className="pill pill-cta">
              <span>Sign In</span>
            </Link>
            <Link to="/register" className="ghost">
              Create Account
            </Link>
          </div>
        </main>

        <div className="logos">
          <div className="lg lg1">
            <svg viewBox="0 0 30 31" width="100%" height="100%">
              <mask id="biteMask">
                <rect width="30" height="31" fill="white" />
                <circle cx="19.5" cy="10.5" r="5.1" fill="black" />
              </mask>
              <path d="M15 31 C6.7 31 0 24.3 0 16 C0 7.7 6.7 1 15 1 C23.3 1 30 7.7 30 16 C30 24.3 23.3 31 15 31 Z" fill="currentColor" mask="url(#biteMask)" />
            </svg>
            <span className="wordmark">React</span>
          </div>
          <div className="lg lg2">
            <svg viewBox="0 0 25 30" width="100%" height="100%">
              <rect x="0" y="0" width="8" height="30" fill="currentColor" />
              <path d="M25 15 C25 23.3 18.3 30 10 30 L10 0 C18.3 0 25 6.7 25 15 Z" fill="currentColor" />
            </svg>
            <span className="wordmark">Flask<span className="dot"></span></span>
          </div>
          <div className="lg lg3">
            <svg viewBox="0 0 28 28" width="100%" height="100%">
              <circle cx="14" cy="14" r="12.35" stroke="currentColor" strokeWidth="3.1" fill="none" />
              <path d="M14 1.65 C7.2 1.65 1.65 7.2 1.65 14 C1.65 18 3.5 21 6 23 C9 25.5 14 26.35 14 26.35 C14 26.35 16 19 14 14 C12 9 14 1.65 14 1.65 Z" fill="currentColor" />
            </svg>
            <span className="wordmark">SQLite</span>
          </div>
          <div className="lg lg4">
            <svg viewBox="0 0 28 25.5" width="100%" height="100%">
              <path d="M0 12 C4 8 8 8 14 12 C20 16 24 16 28 12 L28 25.5 L0 25.5 Z" fill="currentColor" />
              <path d="M0 6 C4 2 8 2 14 6 C20 10 24 10 28 6" stroke="currentColor" strokeWidth="3.05" fill="none" />
              <path d="M0 0 C4 -4 8 -4 14 0 C20 4 24 4 28 0" stroke="currentColor" strokeWidth="3.05" fill="none" />
            </svg>
            <span className="wordmark">Vite</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
