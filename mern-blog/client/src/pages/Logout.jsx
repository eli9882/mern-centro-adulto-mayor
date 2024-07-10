import  { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        // Limpiar el usuario actual en el contexto
        setCurrentUser(null);

        // Redireccionar a la página de login después de hacer logout
        navigate('/login');
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    logoutUser(); // Llamar al método de logout al montar el componente
  }, [currentUser, setCurrentUser, navigate]); 

  return null; 
};

export default Logout;
