
import { Outlet, Link } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="dashboard-container">
      
        <h2>Dashboard</h2>
        <nav>
          {/*  links */}
          <p>Menú de Navegación</p>
        </nav>
     
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