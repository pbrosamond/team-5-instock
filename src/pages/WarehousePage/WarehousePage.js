import './WarehousePage.scss';

import WarehouseList from '../../components/WarehouseList/WarehouseList';
import WarehouseDelete from '../../components/WarehouseDelete/WarehouseDelete';
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';

import { Link } from 'react-router-dom';

function WarehousePage() {
  return (
    <>
      <WarehouseList />
      <WarehouseDetails />
      <WarehouseDelete />
    </>
  );
}

export default WarehousePage;
