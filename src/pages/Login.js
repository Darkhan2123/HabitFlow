import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Form } from 'antd';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg bg-white">
      <h2 className="text-2xl mb-4">Login</h2>
      <Form onFinish={handleLogin}>
        <Form.Item>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
