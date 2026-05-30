import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Lourdes from './pages/Lourdes';
import Maiten from './pages/Maiten';
import Nidia from './pages/Nidia';


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