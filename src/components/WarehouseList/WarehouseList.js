import "./WarehouseList.scss";
import sort from "../../assets/icons/sort-default-24px.svg";

import { Link } from "react-router-dom";

function WarehouseList() {
  return (
    <section className="warehouse">
      <div className="warehouse__header">
        <h1 className="warehouse__title">Warehouses</h1>
        <input className="warehouse__search" placeholder="Search"></input>
        <button className="warehouse__button">+ Add New Warehouse</button>
      </div>

      <section>
        <div>
          <h4>WAREHOUSE</h4>
          <img src={sort}></img>
        </div>
        <div>
          <h4>ADDRESS</h4>
          <img src={sort}></img>
        </div>
        <div>
          <h4>CONTACT NAME</h4>
          <img src={sort}></img>
        </div>
        <div>
          <h4>CONTACT INFORMATION</h4>
          <img src={sort}></img>
        </div>
        <div>
          <h4>ACTIONS</h4>
        </div>
      </section>
    </section>
  );
}

export default WarehouseList;
