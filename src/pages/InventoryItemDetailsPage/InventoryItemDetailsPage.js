import InventoryItemDetails from "../../components/InventoryItemDetails/InventoryItemDetails";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const { REACT_APP_API_BASE_PATH } = process.env;

function InventoryItemDetailsPage() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  const fetchInventoryID = async (id) => {
    try {
      const response = await axios.get(
        `${REACT_APP_API_BASE_PATH}/api/inventories/${id}`
      );
      const data = response.data;
      setItem(data);
    } catch (error) {
      console.error(`Cannot get item information`, error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchInventoryID(id);
    } else {
      fetchInventoryID(null);
    }
  }, [id]);

  return <>{item && id && <InventoryItemDetails id={id} item={item} />}</>;
}

export default InventoryItemDetailsPage;
