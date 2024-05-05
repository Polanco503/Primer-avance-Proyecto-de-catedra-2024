import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import localPlantStorage from "../../../local-storage/local-storage";
import "./style/style.css"; // Archivo de estilos


const Formulario = () => {
  // Estado para almacenar los valores del formulario
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");

  // Manejadores de cambios en los inputs
  const handleNombreChange = event => {
    setNombre(event.target.value);
  };

  const handleImagenChange = event => {
    setImagen(event.target.value);
  };

  const handleDescripcionChange = event => {
    setDescripcion(event.target.value);
  };

  // Manejador de envío del formulario
  const handleSubmit = event => {
    event.preventDefault();
    // Aquí puedes enviar los datos a donde los necesites, por ejemplo, a través de una función prop
    localPlantStorage.addPlant({
      id: uuidv4(),
      name: nombre,
      image: imagen,
      description: descripcion
    });
    // Limpia el formulario después del envío
    setNombre("");
    setImagen("");
    setDescripcion("");
  };

  return (
    <div className="formulario-container">
      <h2 className="header">Agregar nueva planta</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleNombreChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imagen">URL de la imagen:</label>
          <input
            type="text"
            id="imagen"
            value={imagen}
            onChange={handleImagenChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={handleDescripcionChange}
            required
          />
        </div>
          <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
