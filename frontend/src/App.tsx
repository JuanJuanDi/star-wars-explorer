import Particles from './components/Particles';

function App() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        overflow: 'hidden',
      }}
    >
      {/*Fondo de partículas */}
      <Particles
        particleColors={['#ffffff', '#aaaaaa', '#8888ff', '#ff88ff']}
        particleCount={5000}
        particleSpread={20}
        speed={0.05}
        disableRotation={false}
      />
    </div>
  );
}

export default App;
