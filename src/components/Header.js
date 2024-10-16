import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const Header = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Productivity App</h1>
        {isLoggedIn && (
          <div>
            <Button
              className="mr-4"
              type="default"
              onClick={() => navigate('/dashboard')}
            >
              Dashboard
            </Button>
            <Button type="default" onClick={() => navigate('/profile')}>
              Profile
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
