import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import DataExplorer from './pages/DataExplorer';
import ApiModule from './pages/ApiModule';
import Galeria from './pages/Galeria';
import Bitacora from './pages/Bitacora';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="perfil/:id" element={<Profile />} />
          <Route path="explorador" element={<DataExplorer />} />
          <Route path="api" element={<ApiModule />} />
          {/* ...otras rutas */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;