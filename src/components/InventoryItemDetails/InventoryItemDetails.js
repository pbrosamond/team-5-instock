import "./InventoryItemDetails.scss";
import editButton from "../../assets/icons/edit-24px white.svg";
import backArrow from "../../assets/icons/arrow_back-24px.svg";

import { Link } from "react-router-dom";

function InventoryItemDetails({ item }) {
  console.log(item);
  return (
    <>
      <div className="body__block"></div>
      <main className="item__card">
        <div className="item__header">
          <div className="item__header-container">
            <button className="item__back-button">
              <img src={backArrow} />
            </button>
            <h1 className="item__name">{item.item_name}</h1>
          </div>
          <button className="item__edit-button">
            <img src={editButton} />
            <p className="item__edit-button-word">Edit</p>
          </button>
        </div>
        <div className="item__container">
          <section className="item__wrapper item__left-container">
            <div className="item__block">
              <h4 className="item__subtitle">ITEM DESCRIPTION:</h4>
              <p>{item.description}</p>
            </div>
            <div className="item__block">
              <h4 className="item__subtitle">CATEGORY:</h4>
              <p>{item.category}</p>
            </div>
          </section>
          <section className="item__wrapper item__right-container">
            <div className="item__wrap">
              <div className="item__block">
                <h4 className="item__subtitle">STATUS:</h4>
                <p>{item.status}</p>
              </div>
              <div className="item__block">
                <h4 className="item__subtitle">QUANTITY:</h4>
                <p>{item.quantity}</p>
              </div>
            </div>
            <div className="item__block">
              <h4 className="item__subtitle">WAREHOUSE:</h4>
              <p>{item.warehouse_id}</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default InventoryItemDetails;
