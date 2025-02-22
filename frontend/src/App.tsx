import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Favorites from './pages/Favorites';
import ProtectedRoute from './components/ProtectedRoute';
import Particles from './components/Particles/Particles';
import TextPressure from './components/TextPressure/TextPressure';

function App() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Particles
        particleColors={['#ffffff', '#aaaaaa', '#8888ff', '#ff88ff']}
        particleCount={8000}
        particleSpread={20}
        speed={0.05}
        particleBaseSize={60}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <div
        style={{
          position: 'absolute',
          top: '10%',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <TextPressure
          text="STARWARSEXPLORE"
          stroke={true}
          textColor="#ffffff"
          strokeColor="#ffcc00"
          minFontSize={350}
        />
      </div>

      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          <Route element={<ProtectedRoute />}>
            {/* <Route path="/favorites" element={<Favorites />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
