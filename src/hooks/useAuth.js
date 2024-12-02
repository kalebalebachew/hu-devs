import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {jwtDecode} from 'jwt-decode'; 

export function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const router = useRouter();

  
  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const role = decodedToken?.role;
      if (role) {
        setIsAuthenticated(true);
        setUserRole(role);
      }
    }
    setIsLoading(false); 
  }, []);

  const login = async (email, password, onClose) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://hu-devs-backend.onrender.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const { token } = await response.json();
      localStorage.setItem('auth_token', token);

      const decodedToken = jwtDecode(token);
      const role = decodedToken?.role;

      setIsAuthenticated(true);
      setUserRole(role);

      onClose(); // Close login dialog

     
      window.location.reload(); 

    
      if (role === 'admin') {
        router.replace('/admin');
      } else if (role === 'student') {
        router.replace('/student');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setIsAuthenticated(false);
    setUserRole(null);
    router.replace('/');
  };

  return { login, logout, isAuthenticated, userRole, isLoading };
}
