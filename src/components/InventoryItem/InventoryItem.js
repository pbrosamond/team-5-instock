import './InventoryItem.scss';
import chevronIcon from '../../assets/icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';

import { Link } from 'react-router-dom';

function InventoryItem({ showModal, inventory }) {
  const {
    id,
    warehouse_id,
    item_name,
    category,
    status,
    quantity,
    warehouse_name,
  } = inventory;

  return (
    <section className="wrapper2">
      <div>
        <h4 className="wrapper2__titles">INVENTORY ITEM</h4>
        <Link
          className="wrapper2__decoration"
          to={`/inventories/${id}/details`}
        >
          <div className="wrapper2__link">
            <h3 className="wrapper2__textlink">{item_name}</h3>
            <img className="wrapper2__icon" src={chevronIcon}></img>
          </div>
        </Link>
      </div>

      <div className="wrapper2__status">
        <h4 className="wrapper2__titles">Status</h4>
        <p
          className={
            quantity === 0
              ? 'wrapper2__stock wrapper2__stock-out-of-stock'
              : 'wrapper2__stock'
          }
        >
          {status}
        </p>
      </div>
      <div className="wrapper2__category">
        <h4 className="wrapper2__titles">CATEGORY</h4>
        <p className="wrapper2__details">{category}</p>
      </div>
      <div className="wrapper2__quantity">
        <h4 className="wrapper2__titles">QTY</h4>
        <p className="wrapper2__details">{quantity}</p>
      </div>
      <div className="wrapper2__warehouse">
        <h4 className="wrapper2__titles">WAREHOUSE</h4>
        <p className="wrapper2__details">{warehouse_name ?? warehouse_id}</p>
      </div>
      <div className="wrapper2__icons">
        <img
          className="wrapper2__icon"
          src={deleteIcon}
          onClick={() => showModal(id)}
        ></img>
        <Link to={`/inventories/${id}`}>
          <img className="wrapper2__icon" src={editIcon}></img>
        </Link>
      </div>
    </section>
  );
}

export default InventoryItem;
