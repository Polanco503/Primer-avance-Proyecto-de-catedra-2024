import { useState } from "react";
import FirebaseApp from "../../thirdParty/firebase";
import "./style/login.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // Definir el estado para el nombre de usuario y la contraseña
  const navigate = useNavigate();
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
    try {
    event.preventDefault();
    const loginUser = await FirebaseApp.loginWithEmailAndPassword(
      username,
      password
    );
    /**
     * TODO: add local storage
     */
    if(loginUser.user.uid){
      navigate("/home");
    }
    } catch (err){}

  };


  const LogInWithGoogle = async () => {
    try {
      const googleAuthResponse = await FirebaseApp.authWithGoogle();
      /**
       * TODO: add local storage
       */
      if(googleAuthResponse?.idToken){
        navigate("/home");
      }
    } catch (err){}
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
      <button onClick={LogInWithGoogle}>Iniciar session con google</button>
    </div>
  );
};

export default LoginForm;
