import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Character } from "./pages/Character";
import { Planet } from "./pages/Planet";
import { Film } from "./pages/Film";
import { StarshipVehicles } from "./pages/StarshipVehicles";

import Particles from "./components/Particles";
import GlassIcons from "./components/GlassIcons";

function App() {
  const items = [
    {
      icon: (
        <img
          src="/CharacterIcon.svg"
          alt="Character"
          style={{ width: "100%", height: "100%" }}
        />
      ),
      color: "#2E5DAC",
      label: "Character",
      src: "/character",
    },
    {
      icon: (
        <img
          src="/Planeticon.svg"
          alt="Planet"
          style={{ width: "100%", height: "100%" }}
        />
      ),
      color: "#3AB34A",
      label: "Planet",
      src: "/planet",
    },
    {
      icon: (
        <img
          src="/StarshipIcon.svg"
          alt="Starship/Vehicles"
          style={{ width: "100%", height: "100%" }}
        />
      ),
      color: "#FF0000",
      label: "Starship/Vehicles",
      src: "/starship",
    },
    {
      icon: (
        <img
          src="/FilmIcon.svg"
          alt="Film"
          style={{ width: "100%", height: "100%" }}
        />
      ),
      color: "#9400D3",
      label: "Film",
      src: "/film",
    },
    {
      icon: (
        <img
          src="/FavoriteIcon.svg"
          alt="Favorite"
          style={{ width: "100%", height: "100%" }}
        />
      ),
      color: "#FFE81F",
      label: "Favorite",
      src: "/favorite",
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "80px",
      }}
    >
      {/* Fondo de partículas */}
      <Particles
        particleColors={["#ffffff", "#aaaaaa", "#8888ff", "#ff88ff"]}
        particleCount={8000}
        particleSpread={20}
        speed={0.05}
        disableRotation={false}
      />

      {/* Contenedor principal para las rutas */}
      <div
        style={{
          width: "100%",
          flex: 1,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/character" element={<Character />} />
          <Route path="/planet" element={<Planet />} />
          <Route path="/starship" element={<StarshipVehicles />} />
          <Route path="/film" element={<Film />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </div>

      {/* Contenedor de los iconos */}
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          zIndex: 2,
        }}
      >
        <GlassIcons items={items} className="custom-class" />
      </div>
    </div>
  );
}

export default App;
