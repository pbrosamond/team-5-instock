import './WarehouseList.scss';
import sort from '../../assets/icons/sort-default-24px.svg';

import WarehouseItem from '../Warehouse Item/WarehouseItem';

import WarehouseDelete from '../WarehouseDelete/WarehouseDelete';
import { useEffect, useState } from 'react';
import axios from 'axios';
const { REACT_APP_API_BASE_PATH } = process.env;

function WarehouseList() {
  const [showDelete, setShowDelete] = useState(false);
  const [warehouseList, setWarehouseList] = useState();
  const [warehouseId, setWarehouseId] = useState();

  const showModal = (id) => {
    if (id) {
      setWarehouseId(id);
    }
    setShowDelete(!showDelete);
  };

  const updateList = (id) => {
    const newList = warehouseList.filter((warehouse) => warehouse.id !== id);
    setWarehouseList(newList);
  };

  const getList = async () => {
    const res = await axios.get(`${REACT_APP_API_BASE_PATH}/api/warehouses`);
    setWarehouseList(res.data);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <div className="body__block"></div>
      <section className="warehouse form__container">
        <div className="warehouse__header">
          <h1 className="warehouse__title">Warehouses</h1>
          <div className="warehouse__actions">
            <input
              className="warehouse__search"
              type="text"
              id="search"
              placeholder="Search..."
            ></input>
            <button className="warehouse__button">+ Add New Warehouse</button>
          </div>
        </div>
        <section className="warehouse__filter">
          <div className="warehouse__sorts">
            <h4 className="warehouse__subtitle">WAREHOUSE</h4>
            <img src={sort}></img>
          </div>
          <div className="warehouse__sorts">
            <h4 className="warehouse__subtitle">ADDRESS</h4>
            <img src={sort}></img>
          </div>
          <div className="warehouse__sorts">
            <h4 className="warehouse__subtitle">CONTACT NAME</h4>
            <img src={sort}></img>
          </div>
          <div className="warehouse__sorts">
            <h4 className="warehouse__subtitle">CONTACT INFORMATION</h4>
            <img src={sort}></img>
          </div>
          <div className="warehouse__sorts actions">
            <h4 className="warehouse__subtitle">ACTIONS</h4>
          </div>
        </section>
        {warehouseList &&
          warehouseList.map((warehouse) => {
            return (
              <WarehouseItem showModal={showModal} warehouse={warehouse} />
            );
          })}
      </section>
      {showDelete && (
        <WarehouseDelete
          showModal={showModal}
          id={warehouseId}
          updateList={updateList}
        />
      )}
    </>
  );
}

export default WarehouseList;
