import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAppContext();

  const handleGuestLogin = () => {
    setUser({
      id: 'guest',
      name: 'Guest User',
      email: 'guest@example.com'
    });
    console.log('Navigating to dashboard...'); // Debug log
    navigate('/dashboard'); // Ensure this matches your route
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        {/* ... existing login form ... */}
        <button
          onClick={handleGuestLogin}
          className="w-full mt-4 bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300"
        >
          Continue as Guest
        </button>
      </div>
    </div>
  );
};

export default Login;