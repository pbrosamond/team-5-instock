import InventoryEdit from "../../components/InventoryEdit/InventoryEdit";
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import axios from "axios";
const { REACT_APP_API_BASE_PATH } = process.env

function InventoryEditPage() {
    const [ item, setItem] = useState(null)
    const [inventoryList, setInventoryList] = useState(null)
    const { id } = useParams()

    const fetchAllInventory = async() => {
      try {
          const response = await axios.get(`${REACT_APP_API_BASE_PATH}/api/inventories/`);
          const data = response.data;
          setInventoryList(data);
      } catch (error) {
          console.error(`Cannot get all iventory information`, error);
      }
    };

    const fetchInventoryID = async (id) => {
      try {
          const response = await axios.get(`${REACT_APP_API_BASE_PATH}/api/inventories/${id}`);
          const data = response.data;
          setItem(data);
      } catch (error) {
          console.error(`Cannot get item information`, error);
      }
    };

    useEffect(()=> {
      fetchAllInventory()
    },[])

    useEffect(() => {
      if (id) {
        fetchInventoryID(id);
      } else {
        fetchInventoryID(null)
      }
    },[id])

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

  return (
    <>
    {item && inventoryList && allWarehouses &&
      <InventoryEdit item={item} inventoryList={inventoryList} allWarehouses={allWarehouses} />
    }
    </>
  )
}

export default InventoryEditPage;
