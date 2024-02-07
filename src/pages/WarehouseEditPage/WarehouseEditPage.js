// import "./WarehousePage.scss";

import WarehouseEdit from "../../components/WarehouseEdit/WarehouseEdit";
import { useParams } from 'react-router-dom';

import { Link } from "react-router-dom";

function WarehouseEditPage() {
    const { id } = useParams()


  return (
    <>
      <WarehouseEdit id={id} />
    </>
  );
}

export default WarehouseEditPage;
