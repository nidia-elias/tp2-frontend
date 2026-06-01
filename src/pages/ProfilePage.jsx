import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { integrantes } from "../data/integrantes";
import "./ProfilePage.css";

export default function ProfilePage() {
  const { id } = useParams();
  const perfil = integrantes.find((p) => p.id === id);

  const [animado, setAnimado] = useState(false);
  const [slideActivo, setSlideActivo] = useState(0);

  useEffect(() => {
    setAnimado(false);
    setSlideActivo(0);
    const timer = setTimeout(() => setAnimado(true), 300);
    return () => clearTimeout(timer);
  }, [id]);

  if (!perfil) {
    return (
      <div className="perfil-no-encontrado">
        <h2>Integrante no encontrado</h2>
        <Link to="/">← Volver al inicio</Link>
      </div>
    );
  }

const siguienteSlide = () =>
  setSlideActivo((prev) => (prev + 1) % perfil.proyectos.length);
const anteriorSlide = () =>
  setSlideActivo((prev) => (prev - 1 + perfil.proyectos.length) % perfil.proyectos.length);

  return (
    <div className="profile-page">

      {/*  ENCABEZADO  */}
      <div className="profile-header">
        <div className="profile-avatar">{perfil.avatar && perfil.avatar.startsWith?.("data:") || perfil.avatar?.includes?.("/") ? <img src={perfil.avatar} alt={perfil.nombre} />: perfil.avatar} </div>
        <div className="profile-info">
          <h1 className="profile-nombre">{perfil.nombre}</h1>
          <p className="profile-rol">{perfil.rol}</p>
          <p className="profile-ubicacion">📍 {perfil.ubicacion}</p>
          <p className="profile-bio">{perfil.bio}</p>
          <div className="social-btns">
            {perfil.redes.map((red) => (
              <a
                key={red.nombre}
                href={red.url}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                style={{ "--hover-color": red.color }}
              >
                {red.nombre}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="profile-body">

        {/*  BARRAS DE HABILIDADES  */}
        <section className="seccion">
          <h2 className="seccion-titulo">Habilidades</h2>
          <div className="skills-lista">
            {perfil.skills.map((skill) => (
              <div key={skill.nombre} className="skill-item">
                <div className="skill-etiquetas">
                  <span className="skill-nombre">{skill.nombre}</span>
                  <span className="skill-pct">{skill.porcentaje}%</span>
                </div>
                <div className="skill-barra-fondo">
                  <div
                    className="skill-barra-relleno"
                    style={{ width: animado ? `${skill.porcentaje}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/*  TECH STACK  */}
        <section className="seccion">
          <h2 className="seccion-titulo">Tech Stack</h2>
          <div className="tech-grid">
            {perfil.techStack.map((tech) => (
              <div key={tech.nombre} className="tech-card">
                <span className="tech-icono">{tech.icono}</span>
                <span className="tech-nombre">{tech.nombre}</span>
              </div>
            ))}
          </div>
        </section>

        {/*  CARRUSEL DE PROYECTOS  */}
        <section className="seccion">
          <h2 className="seccion-titulo">🎬 Películas Favoritas</h2>
          <div className="carrusel">
            <div className="carrusel-slide">
              <h3 className="proyectos-titulo">
                {perfil.proyectos[slideActivo].titulo}
              </h3>
              <p className="proyectos-desc">
                {perfil.proyectos[slideActivo].descripcion}
              </p>
              <div className="proyectos-tags">
                {perfil.proyectos[slideActivo].tecnologias.map((t) => (
                  <span key={t} className="proyectos-tag">{t}</span>
                ))}
              </div>
            </div>
            
            <div className="carrusel-controles">
              <button className="carrusel-btn" onClick={anteriorSlide}>← Anterior</button>
              <span className="carrusel-indicador">
                {slideActivo + 1} / {perfil.proyectos.length}
              </span>
              <button className="carrusel-btn" onClick={siguienteSlide}>Siguiente →</button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}