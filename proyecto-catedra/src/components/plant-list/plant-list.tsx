import localPlantStorage from "../../../local-storage/local-storage";
import { Link } from "react-router-dom";
import "./style/style.css";
function PlantListView() {
  return (
    <div>
      <Link to="/add-plant">
        <button>Agregar planta</button>
      </Link>

      <div className="plant-list-view">
        <header className="header">
          {/* Agregar la imagen de la planta a la izquierda del encabezado */}
          <img
            className="plant-image"
            src="https://ichef.bbci.co.uk/ace/ws/624/amz/worldservice/live/assets/images/2015/11/24/151124121850_planta_624x351_thinkstock_nocredit.jpg"
            alt="Planta"
          />
          <h1>Listado de plantas</h1>
        </header>
        <div className="plant-list">
          {localPlantStorage.plantlist.map(plant =>
            <div key={plant.id} className="plant">
              <img
                className="plant-thumbnail"
                src={plant.image}
                alt={plant.name}
              />
              <div className="plant-details">
                <h2>
                  {plant.name}
                </h2>
                <p>
                  {plant.description}
                </p>
              </div>
              <button
                onClick={() => {
                  localPlantStorage.deletePlant(plant.id);
                  window.location.reload();
                }}
              >
                Eliminar planta
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlantListView;
