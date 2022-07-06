import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Component = ({}: Props) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <h1>About Page</h1>
    </div>
  );
};

export default Component;
