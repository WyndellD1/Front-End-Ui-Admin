import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Component = ({}: Props) => {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/register">Register</Link>
      <h1>Todo page</h1>
    </div>
  );
};

export default Component;
