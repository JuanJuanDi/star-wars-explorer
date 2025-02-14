import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Favorite {
  _id: string;
  name: string;
  type: string;
}

function Favorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login'); // Redirigir si no hay token
          return;
        }

        const response = await axios.get('/api/favorites', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setFavorites(response.data);
      } catch (error) {
        console.error('Error al obtener favoritos', error);
      }
    };

    fetchFavorites();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirigir al login tras logout
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Mis Favoritos</h2>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Cerrar Sesión
      </button>
      {favorites.length === 0 ? (
        <p>No tienes favoritos guardados.</p>
      ) : (
        <ul className="list-disc pl-5">
          {favorites.map((fav) => (
            <li key={fav._id}>{fav.name} ({fav.type})</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
