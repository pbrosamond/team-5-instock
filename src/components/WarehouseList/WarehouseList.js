import "./WarehouseList.scss";
import sort from "../../assets/icons/sort-default-24px.svg";

import { Link } from "react-router-dom";

function WarehouseList() {
  return (
    <section className="warehouse">
      <div className="warehouse__header">
        <h1 className="warehouse__title">Warehouses</h1>
        <input className="warehouse__search" placeholder="Search..."></input>
        <button className="warehouse__button">+ Add New Warehouse</button>
      </div>

      <section className="warehouse__filter">
        <div className="warehouse__sorts">
          <h4 className="warehouse__subtitle">WAREHOUSE</h4>
          <img src={sort}></img>
        </div>
        <div className="warehouse__sorts">
          <h4 className="warehouse__subtitle">ADDRESS</h4>
          <img src={sort}></img>
        </div>
        <div className="warehouse__sorts">
          <h4 className="warehouse__subtitle">CONTACT NAME</h4>
          <img src={sort}></img>
        </div>
        <div className="warehouse__sorts">
          <h4 className="warehouse__subtitle">CONTACT INFORMATION</h4>
          <img src={sort}></img>
        </div>
        <div className="warehouse__sorts">
          <h4 className="warehouse__subtitle">ACTIONS</h4>
        </div>
      </section>
    </section>
  );
}

export default WarehouseList;
