import './WarehouseDetails.scss';
import WarehouseDetailsItem from '../WarehouseDetailsItem/WarehouseDetailsItem';
import backArrow from '../../assets/icons/arrow_back-24px.svg';
import editButton from '../../assets/icons/edit-24px white.svg';
import sort from '../../assets/icons/sort-default-24px.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InventoryDelete from '../InventoryDelete/InventoryDelete';
import Loader from '../Loader/Loader';
const { REACT_APP_API_BASE_PATH } = process.env;

function WarehouseDetails({ id, warehouse }) {
  const [warehouseInvntoryList, setWarehouseInvntoryList] = useState();
  const [showDelete, setShowDelete] = useState(false);
  const [inventoryId, setInventoryId] = useState(false);

  const showModal = (id) => {
    if (id) {
      setInventoryId(id);
    }
    setShowDelete(!showDelete);
  };

  const updateList = (id) => {
    const newList = warehouseInvntoryList.filter(
      (warehouseInvntory) => warehouseInvntory.id !== id
    );
    setWarehouseInvntoryList(newList);
  };

  const fetchWarehouseInvntoryList = async () => {
    try {
      const response = await axios.get(
        `${REACT_APP_API_BASE_PATH}/api/warehouses/${id}/inventories`
      );
      setWarehouseInvntoryList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWarehouseInvntoryList();
  }, [id]);

  if (!warehouseInvntoryList) return <Loader />;
  return (
    <>
      <div className="body__block"></div>
      <main className="item__card">
        <div className="item__header">
          <div className="item__header-container">
            <Link className="item__back-button--link" to={`/warehouses`}>
              <button className="item__back-button">
                <img alt="Back Arrow Icon" src={backArrow} />
              </button>
            </Link>
            <h1 className="item__name">{warehouse.warehouse_name}</h1>
          </div>
          <Link className="item__edit-button--link" to={`/warehouses/${id}`}>
            <button className="item__edit-button">
              <img alt="Edit Icon" src={editButton} />
              <p className="item__edit-button-word">Edit</p>
            </button>
          </Link>
        </div>
        <div className="item__container">
          <section className="item__wrapper item__left-container">
            <div className="item__block">
              <h4 className="item__subtitle">WAREHOUSE ADDRESS</h4>
              <div className="item__address">
                <p>{warehouse.address}</p>
                <p>
                  {warehouse.city}, {warehouse.country}
                </p>
              </div>
            </div>
          </section>
          <section className="item__wrapper item__right-container">
            <div className="item__wrap">
              <div className="item__block">
                <h4 className="item__subtitle">CONTACT NAME</h4>
                <p>{warehouse.contact_name}</p>
                <p>{warehouse.contact_position}</p>
              </div>
              <div className="item__block">
                <h4 className="item__subtitle">CONTACT INFORMATION</h4>
                <p>{warehouse.contact_phone}</p>
                <p>{warehouse.contact_email}</p>
              </div>
            </div>
          </section>
        </div>

        <section className="warehouse__filter">
          <div className="warehouse__sorts">
            <h4 className="warehouse__subtitle">INVENTORY ITEM</h4>
            <img src={sort}></img>
          </div>
          <div className="warehouse__sorts">
            <h4 className="warehouse__subtitle">CATEGORY</h4>
            <img src={sort}></img>
          </div>
          <div className="warehouse__sorts">
            <h4 className="warehouse__subtitle">STATUS</h4>
            <img src={sort}></img>
          </div>
          <div className="warehouse__sorts">
            <h4 className="warehouse__subtitle">QTY</h4>
            <img src={sort}></img>
          </div>
          <div className="warehouse__sorts actions">
            <h4 className="warehouse__subtitle">ACTIONS</h4>
          </div>
        </section>
        {warehouseInvntoryList &&
          warehouseInvntoryList.map((inventory) => {
            return (
              <WarehouseDetailsItem
                key={inventory.id}
                showModal={showModal}
                inventory={inventory}
              />
            );
          })}
      </main>
      {warehouseInvntoryList && showDelete && (
        <InventoryDelete
          inventory={warehouseInvntoryList.find(
            (inventory) => inventory.id === inventoryId
          )}
          showModal={showModal}
          id={inventoryId}
          updateList={updateList}
        />
      )}
    </>
  );
}

export default WarehouseDetails;
