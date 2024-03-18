import { Link } from "react-router-dom";
import "./style/style.css"; // Archivo CSS para estilos

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Información Jardín</h1>
      </header>
      <div className="options-container">
        <Link to="/plant-list">
          <div className="option">
            <img
              src="https://principia.io/media/uploads/images/colegio-domus/1-plantas.jpg"
              width="100px"
              height="100px"
              alt=""
            />
            <h2>Lista de plantas</h2>
          </div>
        </Link>
        <div className="option">
          <img
            src="https://sembralia.com/cdn/shop/articles/fertilizantes1.jpg?v=1648560389&width=600"
            width="100px"
            height="100px"
            alt=""
          />

          <h2>Alerta abonos</h2>
        </div>
        <div className="option">
          <img
            src="https://images.ecestaticos.com/QZEh47MJJTHBI1G8qNfajGgPXyY=/0x0:2272x1505/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F809%2F7cb%2F0c7%2F8097cb0c707326e2cbaf19fb2948195a.jpg"
            width="100px"
            height="100px"
            alt=""
          />
          <h2>Podar, talar y rajar</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
