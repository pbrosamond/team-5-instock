import "./WarehouseDetails.scss";
import WarehouseDetailsItem from "../WarehouseDetailsItem/WarehouseDetailsItem";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import editButton from "../../assets/icons/edit-24px white.svg";

import { Link } from "react-router-dom";

function WarehouseDetails({ warehouse, inventoryList }) {
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
            <button className="item__back-button">
              <img src={backArrow} />
            </button>
            <h1 className="item__name">{warehouse.warehouse_name}</h1>
          </div>
          <button className="item__edit-button">
            <img src={editButton} />
            <p className="item__edit-button-word">Edit</p>
          </button>
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
        <WarehouseDetailsItem />
        <WarehouseDetailsItem />
        <WarehouseDetailsItem />
        <WarehouseDetailsItem />
        <WarehouseDetailsItem />
        <WarehouseDetailsItem />
        <WarehouseDetailsItem />
      </main>
    </>
  );
}

export default WarehouseDetails;
