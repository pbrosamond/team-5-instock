import "./InventoryItemDetails.scss";
import editButton from "../../assets/icons/edit-24px.svg";
import backArrow from "../../assets/icons/arrow_back-24px.svg";

import { Link } from "react-router-dom";

function InventoryItemDetails() {
  return (
    <>
      <div className="body__block"></div>
      <main className="item__card">
        <div className="item__header">
          <div className="item__header-container">
            <button className="item__back-button">
              <img src={backArrow} />
            </button>
            <h1 className="item__name">Television</h1>
          </div>
          <button className="item__edit-button">
            <img src={editButton} />
            <p className="item__edit-button-word">Edit</p>
          </button>
        </div>
        <div className="item__container">
          <div className="item__block">
            <h4 className="item__subtitle">ITEM DESCRIPTION:</h4>
            <p>
              This 50", 4K LED TV provides a crystal-clear picture and vivid
              colors.
            </p>
          </div>
          <div className="item__block">
            <h4 className="item__subtitle">CATEGORY:</h4>
            <p>Electronics</p>
          </div>
          <div>
            <div className="item__wrap">
              <div>
                <div className="item__block">
                  <h4 className="item__subtitle">STATUS:</h4>
                  <p>In Stock</p>
                </div>
              </div>
              <div>
                <div className="item__block">
                  <h4 className="item__subtitle">QUANTITY:</h4>
                  <p>500</p>
                </div>
              </div>
            </div>
            <div className="item__block">
              <h4 className="item__subtitle">WAREHOUSE:</h4>
              <p>Manhattan</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default InventoryItemDetails;
