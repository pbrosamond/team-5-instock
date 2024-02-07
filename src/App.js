import './App.scss';

import Header from './components/Header/Header';
import WarehousePage from './pages/WarehousePage/WarehousePage';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousePage />} />
        <Route path="/api/warehouses" element={<WarehousePage />} />
        <Route path="/api/warehouses/:id" element={<WarehousePage />} />
        <Route path="/api/inventories" element={<InventoryPage />} />
        <Route path="/api/inventories/:id" element={<InventoryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
