
import './Profile.css'; 

const Profile = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Perfil del Integrante</h1>
      <nav>
        <a href="index.html">← Volver al inicio</a>
    </nav>


    <section class="tarjeta" id="tarjeta">

        <img src="img/grisino.jpg" alt="Foto de Nidia"/>

        <h1 id="nombre">Nidia</h1>

        <p><strong>Ciudad:</strong> Mar de Ajó</p>

        <p><strong>Edad:</strong> 34 años</p>

    
        <div class="bloque">

            <h2>Habilidades</h2>

            <ul id="habilidades">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Trabajo en equipo</li>
            </ul>

        </div>

    
        <div class="bloque">

            <h2>Películas favoritas</h2>

            <ol>
                <li>Volver al futuro</li>
                <li>El origen</li>
                <li>Harry Potter</li>
            </ol>

        </div>

    
        <div class="bloque">

            <h2>Discos favoritos</h2>

            <ol>
                <li>The Beatles-Revolver</li>
                <li>Soledad-Poncho al viento</li>
                <li>Paco de Lucía-Fuente y Caudal</li>
            </ol>

        </div>

    
        <div className="botones">

            <button onclick="mostrarMensaje()">
                Mensaje
            </button>

            <button onclick="cambiarTema()">
                Cambiar tema
            </button>

        </div>

    </section>

    <script src="js/script.js"></script>
    </div>
  );
};

export default Profile;