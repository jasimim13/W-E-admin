/* eslint-disable */
import { set } from 'lodash';
import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from 'src/api/axiosInstance';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    // Check if user is already logged in when the app loads
    const token = localStorage.getItem('token');
    if (token) {
      setUser(token);
    }

    if (!token) {
      axiosInstance
        .get('/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data.user);
        })
        .catch(() => localStorage.removeItem('token'));
    }
  }, []);

  const login = async (credentials) => {
    const response = await axiosInstance.post('/auth/login', credentials);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));

    setUser(response.data.user);
    console.log(response);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
