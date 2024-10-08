import InventoryAdd from "../../components/InventoryAdd/InventoryAdd";
import { useState, useEffect } from "react";
import axios from "axios";
const { REACT_APP_API_BASE_PATH } = process.env;

function InventoryAddPage() {
  const [inventoryList, setInventoryList] = useState(null);

  const fetchAllInventory = async () => {
    try {
      const response = await axios.get(
        `${REACT_APP_API_BASE_PATH}/api/inventories/`
      );
      const data = response.data;
      setInventoryList(data);
    } catch (error) {
      console.error(`Cannot get all iventory information`, error);
    }
  };

  useEffect(() => {
    fetchAllInventory();
  }, []);

  const [ allWarehouses, setWarehouse] = useState(null)
   
    const fetchWarehouse = async() => {
        try {
            const response = await axios.get(`${REACT_APP_API_BASE_PATH}/api/warehouses/`);
            const data = response.data;
            setWarehouse(data);
        } catch (error) {
            console.error(`Cannot get warehouse information`, error);
        }
    };

    useEffect(() => {
      fetchWarehouse();
    },[])

  return <>{inventoryList && allWarehouses && <InventoryAdd inventoryList={inventoryList} allWarehouses={allWarehouses}/>}</>;
}

export default InventoryAddPage;
