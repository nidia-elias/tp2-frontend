
import { Outlet, Link } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="dashboard-container">
      
        <h2>Dashboard</h2>

        <aside className="sidebar">
            <nav>
                <Link to="/perfil/nidia">Nidia</Link>
                <Link to="/perfil/lourdes">Lourdes</Link>
                <Link to="/perfil/maiten">Maiten</Link>
            </nav>
        </aside>
     
      <main className="main-content">
        {/* agregar contenido
        */}
        <Outlet /> 
      </main>

      <footer className="footer-global">
        <p>Equipo de Desarrollo - 2026</p>
      </footer>
    </div>
  );
};

export default MainLayout;