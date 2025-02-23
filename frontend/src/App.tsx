import Particles from './components/Particles';
import TextPressure from './components/TextPressure';

function App() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        top: "100px",
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
      <div style={{ textAlign: 'center' }}>
        {/* Primer texto */}
        <TextPressure
          text="STAR WARS"
          flex={true}
          alpha={false}
          stroke={true} 
          width={true}
          weight={true}
          italic={true}
          minFontSize={350} 
          textColor="#FFD700"
          strokeColor="#000000"
        />

        {/* Segundo texto */}
        <TextPressure
          text="EXPLORER"
          flex={true}
          alpha={false}
          stroke={true} 
          width={true}
          weight={true}
          italic={true}
          minFontSize={350} 
          textColor="#FFD700"
          strokeColor="#000000"
        />
      </div>
    </div>
  );
}

export default App;
