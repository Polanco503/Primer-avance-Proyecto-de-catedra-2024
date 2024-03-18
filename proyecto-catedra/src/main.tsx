import React from "react";
import ReactDOM from "react-dom/client";
import LoginForm from "./components/login/login.tsx";
import { BrowserRouter } from 'react-router-dom';
import './style/style.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="main-login-container">
      <LoginForm />
    </div>
  </React.StrictMode>
);
