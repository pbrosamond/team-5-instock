import './WarehouseItem.scss';
import chevronIcon from '../../assets/icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';

import { Link } from 'react-router-dom';
import { useState } from 'react';

function WarehouseItem() {

  const handleDelete = () => {

  }  

  return (
    <section className="wrapper">
      <div>
        <h4 className="wrapper__titles">WAREHOUSE</h4>
        <Link className="wrapper__decoration" to="warehouse/details">
          <div className="wrapper__link">
            <h3 className="wrapper__textlink">Manhattan</h3>
            <img className="wrapper__icon" src={chevronIcon}></img>
          </div>
        </Link>
      </div>
      <div className="wrapper__name">
        <h4 className="wrapper__titles">CONTACT NAME</h4>
        <p className="wrapper__details">Parmin Aujla</p>
      </div>
      <div className="wrapper__address">
        <h4 className="wrapper__titles">ADDRESS</h4>
        <p className="wrapper__details">503 Broadway New York, USA</p>
      </div>
      <div>
        <div className="wrapper__contact">
          <h4 className="wrapper__titles">CONTACT INFORMATION</h4>
          <p className="wrapper__details">+1 (629) 555-0129</p>
          <p className="wrapper__details">paujla@instock.com</p>
        </div>
      </div>
      <div className="wrapper__icons">
        <img
          className="wrapper__icon"
          src={deleteIcon}
          onClick={() => handleDelete()}
        ></img>
        <img className="wrapper__icon" src={editIcon}></img>
      </div>
    </section>
  );
}

export default WarehouseItem;
