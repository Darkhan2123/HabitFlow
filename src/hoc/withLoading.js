import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';

const withLoading = (Component) => (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spin size="large" className="block mx-auto mt-10" />;
  }

  return <Component {...props} />;
};

export default withLoading;
