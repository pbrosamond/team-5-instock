import "./InventoryPage.scss";

import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryAdd from "../../components/InventoryAdd/InventoryAdd";
import InventoryDelete from "../../components/InventoryDelete/InventoryDelete";
// import InventoryEdit from "../../components/InventoryEdit/InventoryEdit";
// import InventoryItemDetails from "../../components/InventoryItemDetails/InventoryItemDetails";
// import InventoryEdit from "../../components/InventoryEdit/InventoryEdit";

// import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

function InventoryPage() {
  return (
    <>
      <InventoryList />
      {/* <InventoryItemDetails /> */}
      <InventoryAdd />
      {/* <InventoryEdit /> */}
      <InventoryDelete />
    </>
  );
}

export default InventoryPage;
