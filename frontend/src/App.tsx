import Particles from './components/Particles';
import TextPressure from './components/TextPressure';
import GlassIcons from './components/GlassIcons';

function App() {
  const items = [
    { icon: <img src="../public/CharacterIcon.svg" alt="Character" style={{ width: '100%', height: '100%' }}/>, color: "#2E5DAC", label: 'Character' },

    { icon: <img src="../public/Planeticon.svg" alt="Planet" style={{ width: '100%', height: '100%' }}/>, color: "#3AB34A", label: 'Planet' },

    { icon: <img src="../public/StarshipIcon.svg" alt="Starship/Vehicles" style={{ width: '100%', height: '100%' }}/> , color: "#FF0000", label: 'Starship/Vehicles' },

    { icon: <img src="../public/FilmIcon.svg" alt="Film" style={{ width: '100%', height: '100%' }}/> , color: "#9400D3", label: 'Film' },

    { icon: <img src="../public/FavoriteIcon.svg" alt="Favorite" style={{ width: '100%', height: '100%' }}/> , color: "#FFE81F", label: 'Favorite' },
  ];

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '80px',
      }}
    >
      {/* Fondo de partículas */}
      <Particles
        particleColors={['#ffffff', '#aaaaaa', '#8888ff', '#ff88ff']}
        particleCount={8000}
        particleSpread={20}
        speed={0.05}
        disableRotation={false}
      />

      {/* Contenedor para los textos */}
      <div style={{ textAlign: 'center', flexShrink: 0 }}>
        <TextPressure
          text="STAR WARS"
          flex
          alpha={false}
          stroke
          width
          weight
          italic
          minFontSize={200}
          textColor="#FFD700"
          strokeColor="#000000"
        />
        <TextPressure
          text="EXPLORER"
          flex
          alpha={false}
          stroke
          width
          weight
          italic
          minFontSize={200}
          textColor="#FFD700"
          strokeColor="#000000"
        />
      </div>

      {/* Contenedor de los iconos */}
      <div
        style={{
          position: 'absolute',
          bottom: '100px',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <GlassIcons items={items} className="custom-class" />
      </div>
    </div>
  );
}

export default App;
