import { useParams, Link } from 'react-router-dom';
import datos from '../data/integrantes.json';
import Carrusel from '../components/Carrusel'; 
import './Profile.css';

const Profile = () => {
  const { id } = useParams();
  const integrante = datos.find(p => p.id === id);

  if (!integrante) return <h1 className="error">Usuario no encontrado</h1>;

  return (
    <div className="profile-container">
      <nav>
        <Link to="/" className="btn-volver">← Volver al inicio</Link>
      </nav>

      <section className="tarjeta">
        <img src={integrante.foto} alt={integrante.nombre} className="foto-perfil" />
        <h1>{integrante.nombre}</h1>
        
        <div className="info-basica">
          <p><strong>Ciudad:</strong> {integrante.ciudad}</p>
          <p><strong>Edad:</strong> {integrante.edad}</p>
        </div>

        {/* --- Sección del Carrusel --- */}
        <div className="bloque">
          <h2>Mis Proyectos</h2>
          {/* Aquí le enviamos los proyectos específicos de este integrante */}
          <Carrusel proyectos={integrante.proyectos} />
        </div>

        {/* --- Sección de Habilidades --- */}
        <div className="bloque">
          <h2>Habilidades</h2>
          <ul className="habilidades-lista">
            {integrante.habilidades.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* ... Resto de tus secciones (Películas, Discos) ... */}
      </section>
    </div>
  );
};

export default Profile;