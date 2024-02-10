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
      <section className="wrapper3">
        <div>
          <h4 className="wrapper3__titles">INVENTORY ITEM</h4>

          <div className="wrapper3__link">
            <h3 className="wrapper3__textlink">test</h3>
            <img className="wrapper3__icon" src={chevronIcon}></img>
          </div>
        </div>
        <div className="wrapper3__name">
          <h4 className="wrapper3__titles">STATUS</h4>
          <p className="wrapper3__details">status</p>
        </div>
        <div className="wrapper3__address">
          <h4 className="wrapper3__titles">CATEGORY</h4>
          <p className="wrapper3__details">category</p>
        </div>
        <div>
          <div className="wrapper3__contact">
            <h4 className="wrapper3__titles">QUANTITY</h4>
            <p className="wrapper3__details">quantity</p>
          </div>
        </div>
        <div className="wrapper3__icons">
          <img className="wrapper3__icon" src={deleteIcon}></img>
          <img className="wrapper3__icon" src={editIcon}></img>
        </div>
      </section>
    </>
  );
}

export default WarehouseDetailsItem;
