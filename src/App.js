import Header from "./components/Header/Header";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import WarehouseEditPage from "./pages/WarehouseEditPage/WarehouseEditPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoryEditPage from "./pages/InventoryEditPage/InventoryEditPage";
import InventoryItemDetailsPage from "./pages/InventoryItemDetailsPage/InventoryItemDetailsPage";
import InventoryAddPage from "./pages/InventoryAddPage/InventoryAddPage";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseAdd from "./components/WarehouseAdd/WarehouseAdd";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousePage />} />
        <Route path="/warehouses" element={<WarehousePage />} />
        <Route path="/warehouses/:id" element={<WarehouseEditPage />} />
        <Route path="/warehouses/:id/details" element={<WarehouseDetailsPage />}/>
        <Route path="/warehouses/add" element={<WarehouseAdd />} />
        <Route path="/inventories" element={<InventoryPage />} />
        <Route path="/inventories/:id" element={<InventoryEditPage />} />
        <Route path="/inventories/:id/details" element={<InventoryItemDetailsPage />}/>
        <Route path="/inventories/add" element={<InventoryAddPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
