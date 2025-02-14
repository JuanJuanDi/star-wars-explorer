import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [characters, setCharacters] = useState<{ name: string }[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('/api/people');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error al obtener personajes', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h2>Personajes de Star Wars</h2>
      <ul>
        {characters.map((char, index) => (
          <li key={index}>{char.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
