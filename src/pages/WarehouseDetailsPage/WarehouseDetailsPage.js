// import "./WarehousePage.scss";

import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const { REACT_APP_API_BASE_PATH } = process.env;

// import { Link } from "react-router-dom";

function WarehouseDetailsPage() {
  const [warehouse, setWarehouse] = useState(null);

  const [inventoryList, setInventoryList] = useState(null);

  const { id } = useParams();

  const fetchWarehouse = async (id) => {
    try {
      const response = await axios.get(
        `${REACT_APP_API_BASE_PATH}/api/warehouses/${id}`
      );
      const data = response.data;
      console.log(data);
      setWarehouse(data);
    } catch (error) {
      console.error(`Cannot get warehouse information`, error);
    }
  };

  const fetchAllInventory = async () => {
    try {
      const response = await axios.get(
        `${REACT_APP_API_BASE_PATH}/api/inventories/`
      );
      const data = response.data;
      console.log(data);
      setInventoryList(data);
    } catch (error) {
      console.error(`Cannot get all iventory information`, error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchWarehouse(id);
    } else {
      fetchWarehouse(null);
    }
  }, [id]);

  useEffect(() => {
    fetchAllInventory();
  }, []);

  return (
    <>
      {warehouse && (
        <WarehouseDetails warehouse={warehouse} inventoryList={inventoryList} />
      )}
    </>
  );
}

export default WarehouseDetailsPage;
