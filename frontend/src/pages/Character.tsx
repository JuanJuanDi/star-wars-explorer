import { useEffect, useState } from 'react';
import TiltedCard from '../components/TiltedCard';

interface CharacterData {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface APIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}

export const CharactersPage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Llama al endpoint de tu backend que consulta SWAPI (ajusta la URL si es necesario)
    fetch('http://localhost:5000/api/people?page=1')
      .then((res) => res.json())
      .then((data: APIResponse) => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al cargar los personajes:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ color: 'white', textAlign: 'center' }}>Cargando...</p>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      {characters.map((character, index) => {
        // Usamos un placeholder para la imagen basado en el nombre del personaje
        const imageSrc =
          'https://lumiere-a.akamaihd.net/v1/images/ahsoka-main_88c206d7.jpeg?region=420%2C60%2C1500%2C843' +
          encodeURIComponent(character.name);
        // Creamos una descripción combinando algunos campos
        const description = `Altura: ${character.height} cm, Peso: ${character.mass} kg`;

        return (
          <TiltedCard
            key={index}
            imageSrc={imageSrc}
            altText={character.name}
            captionText={character.name}
            containerHeight="400px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p style={{ color: 'white', fontSize: '16px', margin: 0 }}>
                {description}
              </p>
            }
          />
        );
      })}
    </div>
  );
};

export default CharactersPage;
