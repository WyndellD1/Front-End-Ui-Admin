import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Component = ({}: Props) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>About pages</h1>
    </div>
  );
};

export default Component;
