import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', fullWidth, isLoading, ...props }) => {
  return (
    <button 
      className={`btn btn-${variant} ${fullWidth ? 'btn-full' : ''} ${isLoading ? 'btn-loading' : ''}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? <span className="loader"></span> : children}
    </button>
  );
};

export default Button;
