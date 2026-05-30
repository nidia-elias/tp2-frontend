
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', color: 'white', backgroundColor: '#1a1a1a' }}>
      <aside style={{ width: '250px', borderRight: '1px solid gray', padding: '20px' }}>
        <h2>Dashboard</h2>
        <nav>
          {/* Aquí irán tus links más tarde */}
          <p>Menú de Navegación</p>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet /> 
      </main>
    </div>
  );
};

export default MainLayout;