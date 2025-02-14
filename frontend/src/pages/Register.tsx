import { useState } from 'react';
import { register } from '../services/api.ts';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(username, password);
      alert('Registro exitoso, ahora inicia sesión');
      navigate('/login');
    } catch (error) {
      console.error('Error en login:', error); 
      alert('Error en login');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
