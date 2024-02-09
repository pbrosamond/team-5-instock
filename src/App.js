import './App.scss';

import Header from './components/Header/Header';
import WarehousePage from './pages/WarehousePage/WarehousePage';
import WarehouseAdd from './components/WarehouseAdd/WarehouseAdd';
import WarehouseEditPage from './pages/WarehouseEditPage/WarehouseEditPage';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousePage />} />
        <Route path="/warehouses" element={<WarehousePage />} />
        <Route path="/warehouses/add" element={<WarehouseAdd />} />
        <Route path="/warehouses/:id" element={<WarehouseEditPage />} />
        <Route path="/inventories" element={<InventoryPage />} />
        <Route path="/inventories/:id" element={<InventoryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
