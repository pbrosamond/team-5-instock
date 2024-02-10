import "./WarehouseDetailsItem.scss";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function WarehouseDetailsItem({ warehouse, inventoryList }) {
  console.log(warehouse, inventoryList);
  // const warehouseInventory = inventoryList.map((place) => place.warehouse_id);
  // const warehouseInventoryList = [...new Set(warehouseInventory)];
  // console.log(warehouseInventoryList);
  return (
    <>
      <section className="wrapper2">
        <div>
          <h4 className="wrapper2__titles">INVENTORY ITEM</h4>
          <div className="wrapper2__link">
            <h3 className="wrapper2__textlink">Television</h3>
            <img className="wrapper2__icon" src={chevronIcon}></img>
          </div>
        </div>

        <div className="wrapper2__name">
          <h4 className="wrapper2__titles">STATUS</h4>
          <p className="wrapper2__details">status</p>
        </div>

        <div className="wrapper2__address">
          <h4 className="wrapper2__titles">CATEGORY</h4>
          <p className="wrapper2__details">category</p>
        </div>

        <div>
          <div className="wrapper2__contact">
            <h4 className="wrapper2__titles">QTY</h4>
            <p className="wrapper2__details">qty</p>
          </div>
        </div>

        <div className="wrapper2__icons">
          <img className="wrapper2__icon" src={deleteIcon}></img>
          <img className="wrapper2__icon" src={editIcon}></img>
        </div>
      </section>
    </>
  );
}

export default WarehouseDetailsItem;
