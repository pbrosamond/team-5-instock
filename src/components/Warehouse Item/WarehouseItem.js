import './WarehouseItem.scss';
import chevronIcon from '../../assets/icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import WarehouseDelete from '../WarehouseDelete/WarehouseDelete';

function WarehouseItem({ showModal, warehouse }) {
  const {
    id,
    warehouse_name,
    address,
    contact_name,
    contact_phone,
    contact_email,
  } = warehouse;
  return (
    <>
      <section className="wrapper">
        <div>
          <h4 className="wrapper__titles">WAREHOUSE</h4>
          <Link className="wrapper__decoration" to="warehouse/details">
            <div className="wrapper__link">
              <h3 className="wrapper__textlink">{warehouse_name}</h3>
              <img className="wrapper__icon" src={chevronIcon}></img>
            </div>
          </Link>
        </div>
        <div className="wrapper__name">
          <h4 className="wrapper__titles">CONTACT NAME</h4>
          <p className="wrapper__details">{contact_name}</p>
        </div>
        <div className="wrapper__address">
          <h4 className="wrapper__titles">ADDRESS</h4>
          <p className="wrapper__details">{address}</p>
        </div>
        <div>
          <div className="wrapper__contact">
            <h4 className="wrapper__titles">CONTACT INFORMATION</h4>
            <p className="wrapper__details">{contact_phone}</p>
            <p className="wrapper__details">{contact_email}</p>
          </div>
        </div>
        <div className="wrapper__icons">
          <img
            className="wrapper__icon"
            src={deleteIcon}
            onClick={() => showModal(id)}
          ></img>
          <img className="wrapper__icon" src={editIcon}></img>
        </div>
      </section>
    </>
  );
}

export default WarehouseItem;
