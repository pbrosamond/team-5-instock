import "./InventoryItem.scss";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

import { Link } from "react-router-dom";

function InventoryItem() {
  return (
    <section className="wrapper2">
      <div>
        <h4 className="wrapper2__titles">INVENTORY ITEM</h4>
        <Link className="wrapper2__decoration" to="/api/warehouse/details">
          <div className="wrapper2__link">
            <h3 className="wrapper2__textlink">Television</h3>
            <img className="wrapper2__icon" src={chevronIcon}></img>
          </div>
        </Link>
      </div>

      <div className="wrapper2__status">
        <h4 className="wrapper2__titles">Status</h4>
        <p className="wrapper2__stock">IN STOCK</p>
      </div>
      <div className="wrapper2__category">
        <h4 className="wrapper2__titles">CATEGORY</h4>
        <p className="wrapper2__details">Electronics</p>
      </div>
      <div className="wrapper2__quantity">
        <h4 className="wrapper2__titles">QTY</h4>
        <p className="wrapper2__details">500</p>
      </div>
      <div className="wrapper2__warehouse">
        <h4 className="wrapper2__titles">WAREHOUSE</h4>
        <p className="wrapper2__details">Washington</p>
      </div>
      <div className="wrapper2__icons">
        <img className="wrapper2__icon" src={deleteIcon}></img>
        <img className="wrapper2__icon" src={editIcon}></img>
      </div>
    </section>
  );
}

export default InventoryItem;
