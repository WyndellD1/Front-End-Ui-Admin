import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Component = ({}: Props) => {
  return (
    <div>
      <Link to="/about">About</Link>
      <h1>Todo page</h1>
    </div>
  );
};

export default Component;
