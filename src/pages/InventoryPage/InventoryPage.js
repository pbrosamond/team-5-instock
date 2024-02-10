import "./InventoryPage.scss";

import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryAdd from "../../components/InventoryAdd/InventoryAdd";
import InventoryDelete from "../../components/InventoryDelete/InventoryDelete";
import InventoryEdit from "../../components/InventoryEdit/InventoryEdit";

function InventoryPage() {
  return (
    <>
      <InventoryList />
      {/* <InventoryItemDetails /> */}
      <InventoryAdd />
      <InventoryEdit />
      <InventoryDelete />
    </>
  );
}

export default InventoryPage;
