import React from 'react';
import Hero from './hero';
import Login from './login';
import OpenAccount from '../OpenAccount';

const Signup = () => {
  return (
    <div>
      <Hero />
      <div id="login-section">
        <Login />
      </div>
      <OpenAccount />
    </div>
  );
};

export default Signup;