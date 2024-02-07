import "./WarehouseItem.scss";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

import { Link } from "react-router-dom";

function WarehouseItem() {
  return (
    <section className="item">
      <div className="item__section">
        <div className="item__subsection">
          <div className="item__container">
            <h4 className="item__title">WAREHOUSE</h4>
            <div className="item__subcontainer">
              <h3 className="item__link">Manhattan</h3>
              <img className="item__img" src={chevronIcon}></img>
            </div>
          </div>
          <div className="item__container">
            <h4 className="item__title">ADDRESS</h4>
            <div className="item__subcontainer">
              <h3 className="item__info">503 Broadway, New York, USA</h3>
            </div>
          </div>
        </div>

        <div className="item__subsection">
          <div className="item__container">
            <h4 className="item__title">CONTACT NAME</h4>
            <div className="item__subcontainer">
              <h3 className="item__info">Parmin Aujla</h3>
            </div>
          </div>
          <div className="item__container">
            <h4 className="item__title">CONTACT INFORMATION</h4>
            <div className="item__subcontainer2">
              <h3 className="item__info">+1 (629) 555-0129</h3>
              <h3 className="item__info">paujla@instock.com</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="item__icons">
        <img src={deleteIcon}/>
        <img src={editIcon}/>
      </div>
    </section>
  );
}

export default WarehouseItem;
