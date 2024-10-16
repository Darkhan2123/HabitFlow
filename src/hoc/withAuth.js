import React from 'react';
import { useNavigate } from 'react-router-dom';

const withAuth = (Component) => {
  return (props) => {
    const isLoggedIn = true;
    const navigate = useNavigate();

    if (!isLoggedIn) {
      navigate('/');
      return null;
    }

    return <Component {...props} />;
  };
};

export default withAuth;
