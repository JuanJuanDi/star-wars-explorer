import { useState } from 'react';
import { login } from '../services/api.ts';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      
      if (data.token) {
        localStorage.setItem('token', data.token);  // Solo guarda si hay token
        navigate('/favorites');
      } else {
        alert('Error: No se recibió token');
      }
    } catch (error) {
      console.error('Error en login:', error);
      alert('Error en login');
    }
  };
  

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
