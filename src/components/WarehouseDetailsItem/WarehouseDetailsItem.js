import "./WarehouseDetailsItem.scss";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";

function WarehouseDetailsItem({ inventory, showModal }) {
  const { id, item_name, category, status, quantity } = inventory;
  return (
    <>
      <section className="wrapper3">
        <div>
          <h4 className="wrapper3__titles">INVENTORY ITEM</h4>

          <div className="wrapper3__link">
            <Link
              className="wrapper3__link--link"
              to={`/inventories/${id}/details`}
            >
              <h3 className="wrapper3__textlink">{item_name}</h3>
            </Link>
            <img className="wrapper3__icon" src={chevronIcon}></img>
          </div>
        </div>
        <div className="wrapper3__name">
          <h4 className="wrapper3__titles">STATUS</h4>
          <p
            className={
              quantity === 0
                ? "wrapper3__details-instock wrapper3__details-out-of-stock"
                : "wrapper3__details-instock"
            }
          >
            {status}
          </p>
        </div>
        <div className="wrapper3__address">
          <h4 className="wrapper3__titles">CATEGORY</h4>
          <p className="wrapper3__details">{category}</p>
        </div>
        <div>
          <div className="wrapper3__contact">
            <h4 className="wrapper3__titles">QUANTITY</h4>
            <p className="wrapper3__details">{quantity}</p>
          </div>
        </div>
        <div className="wrapper3__icons">
          <button className="wrapper3__delete-button">
            <img
              alt="Delete Icon"
              className="wrapper3__icon"
              src={deleteIcon}
              onClick={() => showModal(id)}
            />
          </button>
          <Link to={`/inventories/${id}`}>
            <img
              alt="Edit Icon"
              className="wrapper3__icon"
              src={editIcon}
            ></img>
          </Link>
        </div>
      </section>
    </>
  );
}

export default WarehouseDetailsItem;
