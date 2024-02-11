// import "./WarehousePage.scss";

import WarehouseEdit from "../../components/WarehouseEdit/WarehouseEdit";
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import axios from "axios";
const { REACT_APP_API_BASE_PATH } = process.env

// import { Link } from "react-router-dom";

function WarehouseEditPage() {
    const [ warehouse, setWarehouse] = useState(null)
    const { id } = useParams()
   
    const fetchWarehouse = async (id) => {
        try {
            const response = await axios.get(`${REACT_APP_API_BASE_PATH}/api/warehouses/${id}`);
            const data = response.data;
            console.log(data);
            setWarehouse(data);
        } catch (error) {
            console.error(`Cannot get warehouse information`, error);
        }
    };

    useEffect(() => {
      if (id) {
        fetchWarehouse(id);
      } else {
        fetchWarehouse(null)
      }
    },[id])

  return (
    <>
    {warehouse && 
      <WarehouseEdit id={id} warehouse={warehouse} />
    }
    </>
  );
}

export default WarehouseEditPage;
