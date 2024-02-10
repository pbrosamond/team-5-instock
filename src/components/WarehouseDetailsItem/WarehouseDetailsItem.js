import "./WarehouseDetailsItem.scss";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function WarehouseDetailsItem({ warehouse, inventoryList, item }) {
  // const warehouseInventory = inventoryList.map((place) => place.warehouse_id);
  // const warehouseInventoryList = [...new Set(warehouseInventory)];
  // console.log(warehouseInventoryList);
  return (
    <>
      <section className="wrapper">
        <div>
          <h4 className="wrapper__titles">INVENTORY ITEM</h4>

          <div className="wrapper__link">
            <h3 className="wrapper__textlink">test</h3>
            <img className="wrapper__icon" src={chevronIcon}></img>
          </div>
        </div>
        <div className="wrapper__name">
          <h4 className="wrapper__titles">STATUS</h4>
          <p className="wrapper__details">status</p>
        </div>
        <div className="wrapper__address">
          <h4 className="wrapper__titles">CATEGORY</h4>
          <p className="wrapper__details">category</p>
        </div>
        <div>
          <div className="wrapper__contact">
            <h4 className="wrapper__titles">QUANTITY</h4>
            <p className="wrapper__details">quantity</p>
          </div>
        </div>
        <div className="wrapper__icons">
          <img className="wrapper__icon" src={deleteIcon}></img>
          <img className="wrapper__icon" src={editIcon}></img>
        </div>
      </section>
    </>
  );
}

export default WarehouseDetailsItem;
