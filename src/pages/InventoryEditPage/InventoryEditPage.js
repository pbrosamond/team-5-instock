import InventoryEdit from "../../components/InventoryEdit/InventoryEdit";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const { REACT_APP_API_BASE_PATH } = process.env;

// import { Link } from "react-router-dom";

function InventoryEditPage() {
  const [item, setItem] = useState(null);
  const [inventoryList, setInventoryList] = useState(null);
  const { id } = useParams();
  console.log(id);

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

  const fetchInventoryID = async (id) => {
    try {
      const response = await axios.get(
        `${REACT_APP_API_BASE_PATH}/api/inventories/${id}`
      );
      const data = response.data;
      console.log(data);
      setItem(data);
    } catch (error) {
      console.error(`Cannot get item information`, error);
    }
  };

  useEffect(() => {
    fetchAllInventory();
  }, []);

  useEffect(() => {
    if (id) {
      fetchInventoryID(id);
    } else {
      fetchInventoryID(null);
    }
  }, [id]);

  return (
    <>
      {item && inventoryList && (
        <InventoryEdit item={item} invenotryList={inventoryList} />
      )}
    </>
  );
}

export default InventoryEditPage;
