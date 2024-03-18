import { useState } from "react";
import { useHistory } from 'react-router-dom';
import FirebaseApp from "../../thirdParty/firebase";
import "./style/login.css";

const LoginForm = () => {
  // Definir el estado para el nombre de usuario y la contraseña
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Manejar cambios en el campo de nombre de usuario
  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  // Manejar cambios en el campo de contraseña
  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  // Manejar envío del formulario
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const createUserResponse = await FirebaseApp.loginWithEmailAndPassword(
      username,
      password
    );
  };


  const LogInWithGoogle = async () => {
    const createUserResponse = await FirebaseApp.authWithGoogle();
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn-login">
          Iniciar Sesión
        </button>
      </form>
      <button onClick={LogInWithGoogle}>Sing in with google</button>
    </div>
  );
};

export default LoginForm;
