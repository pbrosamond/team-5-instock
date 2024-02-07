import "./WarehousePage.scss";

import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseAdd from "../../components/WarehouseAdd/WarehouseAdd";
import WarehouseDelete from "../../components/WarehouseDelete/WarehouseDelete";
// import WarehouseEdit from "../../components/WarehouseEdit/WarehouseEdit";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";

import { Link } from "react-router-dom";

function WarehousePage() {
  return (
    <>
      <WarehouseList />
      <WarehouseDetails />
      <WarehouseAdd />
      {/* <WarehouseEdit /> */}
      <WarehouseDelete />
    </>
  );
}

export default WarehousePage;
