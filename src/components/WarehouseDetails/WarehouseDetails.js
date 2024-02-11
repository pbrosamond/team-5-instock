import "./WarehouseDetails.scss";
import WarehouseDetailsItem from "../WarehouseDetailsItem/WarehouseDetailsItem";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import editButton from "../../assets/icons/edit-24px white.svg";
import sort from "../../assets/icons/sort-default-24px.svg";

import { Link } from "react-router-dom";

function WarehouseDetails({ id, warehouse, inventoryList }) {
  console.log(warehouse, inventoryList);
  // const warehouseInventory = inventoryList.map((place) => place.warehouse_id);
  // const warehouseInventoryList = [...new Set(warehouseInventory)];
  // console.log(warehouseInventoryList);
  return (
    <>
      <div className="body__block"></div>
      <main className="item__card">
        <div className="item__header">
          <div className="item__header-container">
            <Link to={`/warehouses`}><button className="item__back-button">
              <img src={backArrow} />
            </button></Link>
            <h1 className="item__name">{warehouse.warehouse_name}</h1>
          </div>
          <Link to={`/warehouses/${id}`}><button className="item__edit-button">
            <img src={editButton} />
            <p className="item__edit-button-word">Edit</p>
          </button></Link>
        </div>

        <div className="item__container">
          <section className="item__wrapper item__left-container">
            <div className="item__block">
              <h4 className="item__subtitle">WAREHOUSE ADDRESS:</h4>
              <p>{warehouse.address}</p>
              <p>
                {warehouse.city}, {warehouse.country}
              </p>
            </div>
          </section>
          <section className="item__wrapper item__right-container">
            <div className="item__wrap">
              <div className="item__block">
                <h4 className="item__subtitle">CONTACT NAME:</h4>
                <p>{warehouse.contact_name}</p>
                <p>{warehouse.contact_position}</p>
              </div>
              <div className="item__block">
                <h4 className="item__subtitle">CONTACT INFORMATION:</h4>
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
            <h4 className="warehouse__subtitle">QUANTITY</h4>
            <img src={sort}></img>
          </div>
          <div className="warehouse__sorts actions">
            <h4 className="warehouse__subtitle">ACTIONS</h4>
          </div>
        </section>
        <WarehouseDetailsItem />
        <WarehouseDetailsItem />
      </main>
    </>
  );
}

export default WarehouseDetails;
