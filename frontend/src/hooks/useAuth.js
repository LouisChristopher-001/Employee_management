import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Log all cookies
    console.log('Document cookies:', document.cookie);

    // Get token using js-cookie
    const token = Cookies.get('token');
    console.log('Token from Cookies:', token);

    // Redirect to login if token is not found
    if (!token) {
      console.log('No token found, redirecting to login');
      navigate('/');
    }
  }, [navigate]);
};
