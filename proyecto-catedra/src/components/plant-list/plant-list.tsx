import React from 'react';
import './style/style.css'; // Archivo CSS para estilos

function PlantListView() {
  // Supongamos que tienes un array de plantas
  const plants = [
    {
      id: 1,
      name: 'Orquídea',
      description: 'Una hermosa flor con muchos colores y formas.',
      image: 'https://media.admagazine.com/photos/618a62c1fb71c632cb92416a/master/w_1600,c_limit/82872.jpg',
    },
    {
      id: 2,
      name: 'Cactus',
      description: 'Una planta resistente que no requiere mucho cuidado.',
      image: 'https://res.cloudinary.com/compo-com/image/fetch/c_fill,g_xy_center,f_auto,w_708,h_531,x_iw_mul_46_div_100,y_ih_mul_41_div_100/https://www.compo.de/dam/jcr:5e382c1a-8128-4670-9f96-a75044fe31b2/Kaktus%20Blumentopf.jpg',
    },
    {
      id: 3,
      name: 'Rosa',
      description: 'Una flor clásica que simboliza el amor y la belleza.',
      image: 'https://biblioteca.acropolis.org/wp-content/uploads/2019/07/Rosa-Mister_Lincoln.jpg',
    },
  ];

  return (
    <div className="plant-list-view">
      <header className="header">
        {/* Agregar la imagen de la planta a la izquierda del encabezado */}
        <img className="plant-image" src="https://ichef.bbci.co.uk/ace/ws/624/amz/worldservice/live/assets/images/2015/11/24/151124121850_planta_624x351_thinkstock_nocredit.jpg" alt="Planta" />
        <h1>Listado de plantas</h1>
      </header>
      <div className="plant-list">
        {plants.map(plant => (
          <div key={plant.id} className="plant">
            <img className="plant-thumbnail" src={plant.image} alt={plant.name} />
            <div className="plant-details">
              <h2>{plant.name}</h2>
              <p>{plant.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantListView;
