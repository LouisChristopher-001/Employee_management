import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const useAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log('Document cookies:', document.cookie);
    const token = Cookies.get('token');
    console.log('Token from Cookies:', token);
    if (!token) {
      console.log('No token found, redirecting to login');
      navigate('/');
    }
  }, [navigate]);
  
};




