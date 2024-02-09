import InventoryEdit from "../../components/InventoryEdit/InventoryEdit";
import { useParams } from 'react-router-dom';

// import { Link } from "react-router-dom";

function InventoryEditPage() {
    const { id } = useParams()
    console.log(id)

  return (
    <>
      <InventoryEdit id={id} />
    </>
  )
}

export default InventoryEditPage;
