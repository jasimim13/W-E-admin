/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

const ProtectedRoute = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setAuthToken(token);
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  if (!authToken) {
    return <Navigate to="/login" />;
  }

  return children;
};

// Define prop types for validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
