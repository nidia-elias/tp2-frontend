import { useState, useEffect } from "react";
import "./ApiPage.css";

const POSTS_POR_PAGINA = 5;
const TOTAL_PAGINAS = 10;

export default function ApiPage() {
  const [posts, setPosts] = useState([]);         // datos que llegan de la API
  const [cargando, setCargando] = useState(true); // estado: está cargando?
  const [error, setError] = useState(null);       // estado: hubo un error?
  const [paginaActual, setPaginaActual] = useState(1);

  // Se ejecuta cada vez que cambia la página
  useEffect(() => {
    const fetchPosts = async () => {
      setCargando(true);
      setError(null);

      try {
        const inicio = (paginaActual - 1) * POSTS_POR_PAGINA + 1;
        const fin = paginaActual * POSTS_POR_PAGINA;

        // Fetch a la API pública
        const respuesta = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_start=${inicio - 1}&_limit=${POSTS_POR_PAGINA}`
        );

        if (!respuesta.ok) {
          throw new Error(`Error ${respuesta.status}: No se pudo cargar la información.`);
        }

        const datos = await respuesta.json();
        setPosts(datos);
      } catch (err) {
        setError(err.message || "Ocurrió un error inesperado.");
      } finally {
        setCargando(false);
      }
    };

    fetchPosts();
  }, [paginaActual]);

  const irAnterior = () => setPaginaActual((p) => Math.max(1, p - 1));
  const irSiguiente = () => setPaginaActual((p) => Math.min(TOTAL_PAGINAS, p + 1));

  return (
    <div className="api-page">
      <div className="api-header">
        <h1 className="api-titulo">Noticias del Blog</h1>
        <p className="api-subtitulo">
          Datos traídos en tiempo real desde{" "}
          <a href="https://jsonplaceholder.typicode.com" target="_blank" rel="noreferrer">
            JSONPlaceholder API
          </a>
        </p>
      </div>

      {/*  ESTADO: CARGANDO  */}
      {cargando && (
        <div className="api-estado">
          <div className="spinner" aria-label="Cargando..." />
          <p>Cargando posts...</p>
        </div>
      )}

      {/*  ESTADO: ERROR  */}
      {!cargando && error && (
        <div className="api-error">
          <span className="error-icono">⚠️</span>
          <p>{error}</p>
          <button className="btn-reintentar" onClick={() => setPaginaActual(1)}>
            Reintentar
          </button>
        </div>
      )}

      {/*  ESTADO: DATOS LISTOS  */}
      {!cargando && !error && (
        <>
          <div className="posts-lista">
            {posts.map((post) => (
              <article key={post.id} className="post-card">
                <span className="post-numero">#{post.id}</span>
                <div className="post-contenido">
                  <h2 className="post-titulo">{post.title}</h2>
                  <p className="post-cuerpo">{post.body}</p>
                </div>
              </article>
            ))}
          </div>

          {/*  PAGINACIÓN  */}
          <div className="paginacion">
            <button
              className="pag-btn"
              onClick={irAnterior}
              disabled={paginaActual === 1}
            >
              ← Anterior
            </button>

            <span className="pag-indicador">
              Página <strong>{paginaActual}</strong> de{" "}
              <strong>{TOTAL_PAGINAS}</strong>
            </span>

            <button
              className="pag-btn"
              onClick={irSiguiente}
              disabled={paginaActual === TOTAL_PAGINAS}
            >
              Siguiente →
            </button>
          </div>
        </>
      )}
    </div>
  );
}
