// import "./WarehousePage.scss";

import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
const { REACT_APP_API_BASE_PATH } = process.env;

function WarehouseDetailsPage() {
  const [warehouse, setWarehouse] = useState(null);
  const { id } = useParams();

  const fetchWarehouse = async (id) => {
    try {
      const response = await axios.get(
        `${REACT_APP_API_BASE_PATH}/api/warehouses/${id}`
      );
      const data = response.data;
      setWarehouse(data);
    } catch (error) {
      console.error(`Cannot get warehouse information`, error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchWarehouse(id);
    } else {
      fetchWarehouse(null);
    }
  }, [id]);

  return <>{warehouse && <WarehouseDetails warehouse={warehouse} id={id} />}</>;
}

export default WarehouseDetailsPage;
