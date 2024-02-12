import './InventoryList.scss';
import sort from '../../assets/icons/sort-default-24px.svg';
import { Link } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InventoryDelete from '../InventoryDelete/InventoryDelete';
import Loader from '../Loader/Loader';
const { REACT_APP_API_BASE_PATH } = process.env;

function InventoryList() {
  const [inventoriesList, setinventoriesList] = useState();
  const [showDelete, setShowDelete] = useState(false);
  const [inventoryId, setInventoryId] = useState();

  const getList = async () => {
    try {
      const resInventory = await axios.get(
        `${REACT_APP_API_BASE_PATH}/api/inventories`
      );

      setinventoriesList(resInventory.data);
    } catch (error) {
      console.error('Cannot get list of inventories', error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const showModal = (id) => {
    if (id) {
      setInventoryId(id);
    }
    setShowDelete(!showDelete);
  };

  const updateList = (id) => {
    const newList = inventoriesList.filter((inventory) => inventory.id !== id);
    setinventoriesList(newList);
  };

  if (!inventoriesList) return <Loader />;
  return (
    <>
      <div className="body__block"></div>

      <section className="inventory form__container">
        <div className="inventory__header">
          <h1 className="inventory__title">Inventory</h1>
          <div className="inventory__actions">
            <input
              className="inventory__search"
              type="text"
              id="search"
              placeholder="Search..."
            ></input>
            <Link to="/inventories/add">
              <button className="inventory__button">+ Add New Item</button>
            </Link>
          </div>
        </div>
        <section className="inventory__filter">
          <div className="inventory__sorts">
            <h4 className="inventory__subtitle">INVENTORY ITEM</h4>
            <img src={sort}></img>
          </div>
          <div className="inventory__sorts--status">
            <h4 className="inventory__subtitle">STATUS</h4>
            <img src={sort}></img>
          </div>
          <div className="inventory__sorts--category">
            <h4 className="inventory__subtitle">CATEGORY</h4>
            <img src={sort}></img>
          </div>
          <div className="inventory__sorts">
            <h4 className="inventory__subtitle">QTY</h4>
            <img src={sort}></img>
          </div>
          <div className="inventory__sorts">
            <h4 className="inventory__subtitle">WAREHOUSE</h4>
            <img src={sort}></img>
          </div>
          <div className="inventory__sorts actions">
            <h4 className="inventory__subtitle">ACTIONS</h4>
          </div>
        </section>
        {inventoriesList &&
          inventoriesList.map((inventory) => {
            return (
              <InventoryItem
                key={inventory.id}
                showModal={showModal}
                inventory={inventory}
              />
            );
          })}
      </section>
      {inventoriesList && showDelete && (
        <InventoryDelete
          inventory={inventoriesList.find(
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

export default InventoryList;
