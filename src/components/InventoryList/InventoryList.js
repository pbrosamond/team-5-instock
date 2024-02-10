import "./InventoryList.scss";
import sort from "../../assets/icons/sort-default-24px.svg";

import InventoryItem from "../InventoryItem/InventoryItem"

import { Link } from "react-router-dom";

function InventoryList() {
  return (
    <>
    <div className="body__block"></div>

    <section className="inventory form__container">
      <div className="inventory__header">
        <h1 className="inventory__title">Inventory</h1>
        <div className="inventory__actions">
        <input className="inventory__search" type="text" id="search" placeholder="Search..."></input>
        <button className="inventory__button">+ Add New Item</button>
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
      
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />

    </section>
    </>
  );
}

export default InventoryList;
