// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {
//   VscHome,
//   VscArchive,
//   VscAccount,
//   VscSettingsGear,
// } from 'react-icons/vsc';
// import Dock from './components/Dock';
import TextPressure from './components/TextPressure';
import Particles from './components/Particles';
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Favorites from "./pages/Favorites";
// import ProtectedRoute from './components/ProtectedRoute';

function App() {
  // const items = [
  //   {
  //     icon: <VscHome size={18} />,
  //     label: 'Inicio',
  //     onClick: () => alert('Ir a Inicio!'),
  //   },
  //   {
  //     icon: <VscArchive size={18} />,
  //     label: 'Explorar',
  //     onClick: () => alert('Ir a Explorar!'),
  //   },
  //   {
  //     icon: <VscAccount size={18} />,
  //     label: 'Perfil',
  //     onClick: () => alert('Ir al Perfil!'),
  //   },
  //   {
  //     icon: <VscSettingsGear size={18} />,
  //     label: 'Ajustes',
  //     onClick: () => alert('Ir a Ajustes!'),
  //   },
  // ];

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
      {/* 🔥 Fondo de partículas */}
      <Particles
        particleColors={['#ffffff', '#aaaaaa', '#8888ff', '#ff88ff']}
        particleCount={5000}
        particleSpread={20}
        speed={0.05}
        particleBaseSize={60}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
      />

      {/* 🔥 Texto animado central */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <TextPressure
          text="STAR WARS EXPLORE"
          stroke={true}
          textColor="#ffffff"
          strokeColor="#ffcc00"
          minFontSize={50}
        />
      </div>

      {/* 🔥 Sistema de rutas */}
      {/* <Router>
        <Routes> */}
      {/*f5 <Route path="/" element={<Home />} 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
      {/* <Route element={<ProtectedRoute />}> */}
      {/* <Route path="/favorites" element={<Favorites />} /> */}
      {/* </Route>
        </Routes>
      </Router> */}

      {/* 🔥 Dock (Navegación estilo macOS) */}
      {/* <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      /> */}
    </div>
  );
}

export default App;
