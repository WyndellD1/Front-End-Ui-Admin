import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalState } from '../../../hooks/global';

type Props = {};

const Component = ({ }: Props) => {
  const navigate = useNavigate();
  const {
    useCurrentUser: { currentUser },
  } = useGlobalState();

  // useEffect(() => {
  //   if (currentUser?.user.isVerified) {
  //     navigate('/youth-profile');
  //     // navigate('/set-profile', { state: { step: 1 } });
  //   }
  // }, [currentUser?.user.isVerified]);

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <h1>About Page</h1>
    </div>
  );
};

export default Component;
