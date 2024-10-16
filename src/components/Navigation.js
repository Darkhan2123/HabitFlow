import React from "react";
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
