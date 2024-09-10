import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Log all cookies
    

    // Get token using js-cookie
    const token = Cookies.get('token');

    // Redirect to login if token is not found
    if (!token) {
      console.log('No token found, redirecting to login');
      navigate('/');
    }
  }, [navigate]);
};
