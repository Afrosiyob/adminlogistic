import React from 'react';

const Logo = props => {
  return (
    <img
      alt="Logo"
      src="/static/logistic.png"
      style={{ width: '50px', height: 'auto' }}
      {...props}
    />
  );
};

export default Logo;
