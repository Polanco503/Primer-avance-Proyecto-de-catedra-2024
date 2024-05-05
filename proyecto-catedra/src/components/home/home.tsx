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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Diversity_of_plants_%28Streptophyta%29_version_2.png/500px-Diversity_of_plants_%28Streptophyta%29_version_2.png"
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
      </div>
    </div>
  );
}

export default App;
