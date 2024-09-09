import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const useAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get('token'); // Ensure this matches the cookie name set in the backend
    if (!token) {
      console.log('No token found, redirecting to login');
      navigate('/home'); // Redirect to login page if token is not found
    }
  }, [navigate]);
};




