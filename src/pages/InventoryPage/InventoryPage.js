import "./InventoryPage.scss";

import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryAdd from "../../components/InventoryAdd/InventoryAdd";
import InventoryDelete from "../../components/InventoryDelete/InventoryDelete";
// import InventoryEdit from "../../components/InventoryEdit/InventoryEdit";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";

// import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

function InventoryPage() {
  return (
    <>
      <InventoryList />
      <InventoryDetails />
      <InventoryAdd />
      {/* <InventoryEdit /> */}
      <InventoryDelete />
    </>
  );
}

export default InventoryPage;
