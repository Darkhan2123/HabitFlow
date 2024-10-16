import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Profile = ({ habits }) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl mb-4">User Profile</h2>
      <ul className="list-disc list-inside">
        {habits && habits.map((habit, index) => (
          <li key={index}>{habit.name}</li>
        ))}
      </ul>
      <Button type="primary" onClick={() => navigate('/dashboard')}>
        Back to Dashboard
      </Button>
    </div>
  );
};

export default Profile;
