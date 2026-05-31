import { useState } from 'react';
import './Carrusel.css';

const Carrusel = ({ proyectos }) => {
  const [indiceActual, setIndiceActual] = useState(0);

  if (!proyectos || proyectos.length === 0) return <p>No hay proyectos para mostrar.</p>;

  const siguiente = () => setIndiceActual((indiceActual + 1) % proyectos.length);
  const anterior = () => setIndiceActual((indiceActual - 1 + proyectos.length) % proyectos.length);

  return (
    <div className="carrusel-wrapper">
      <button className="btn-flecha" onClick={anterior}>❮</button>
      
      <div className="proyecto-slide">
        <img src={proyectos[indiceActual].img} alt="Proyecto" />
        <h3>{proyectos[indiceActual].titulo}</h3>
        <p>{proyectos[indiceActual].desc}</p>
      </div>

      <button className="btn-flecha" onClick={siguiente}>❯</button>
    </div>
  );
};

export default Carrusel;