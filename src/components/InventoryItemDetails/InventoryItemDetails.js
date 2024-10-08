import "./InventoryItemDetails.scss";
import editButton from "../../assets/icons/edit-24px white.svg";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

function InventoryItemDetails({ id, item }) {
  return (
    <>
      <div className="body__block"></div>
      <main className="inventory-item__card">
        <div className="inventory-item__header">
          <div className="inventory-item__header-container">
            <Link onClick={() => window.history.back()}>
              <button className="inventory-item__back-button">
                <img alt="Back Arrow Icon" src={backArrow} />
              </button>
            </Link>
            <h1 className="inventory-item__name">{item.item_name}</h1>
          </div>
          <Link
            className="inventory-item__edit-button--link"
            to={`/inventories/${id}`}
          >
            <button className="inventory-item__edit-button">
              <img alt="Edit Icon" src={editButton} />
              <p className="inventory-item__edit-button-word">Edit</p>
            </button>
          </Link>
        </div>
        <div className="inventory-item__container">
          <div className="inventory-item__container-left">
            <div className="inventory-item__block">
              <h4 className="inventory-item__subtitle">ITEM DESCRIPTION:</h4>
              <p className="inventory-item__content">{item.description}</p>
            </div>
            <div className="inventory-item__block">
              <h4 className="inventory-item__subtitle">CATEGORY:</h4>
              <p className="inventory-item__content">{item.category}</p>
            </div>
          </div>
          <div className="inventory-item__container-right">
            <div className="inventory-item__container-top">
              <div>
                <div className="inventory-item__block">
                  <h4 className="inventory-item__subtitle">STATUS:</h4>
                  <p
                    className={
                      item.quantity === 0
                        ? "inventory-item__out-of-stock"
                        : "inventory-item__instock"
                    }
                  >
                    {item.status}
                  </p>
                </div>
              </div>
              <div>
                <div className="inventory-item__block">
                  <h4 className="inventory-item__subtitle">QUANTITY:</h4>
                  <p className="inventory-item__content">{item.quantity}</p>
                </div>
              </div>
            </div>
            <div className="inventory-item__block inventory-item__container-down">
              <h4 className="inventory-item__subtitle">WAREHOUSE:</h4>
              <p className="inventory-item__content">{item.warehouse_id}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default InventoryItemDetails;
