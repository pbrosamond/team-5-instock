import "./InventoryEdit.scss";
import data from '../../data/inventories.json';
import { useState} from 'react';


import { Link } from "react-router-dom";

function InventoryEdit({id}) {
  const paramId = Number(id);
  const inventoryItem = data.find(item => item.id === paramId);

  //Create's Drop Down Lists 
  const categories = data.map(category => category.category);
  const warehouses = data.map(place => place.warehouse_id);
  const warehouseList = [...new Set(warehouses)];

  //States
  const [currentItem, setItem] = useState(inventoryItem)
  const [selectedStatus, setSelectedStatus] = useState(currentItem.status);


  const handleChange = (e) => {
      const { name, value, type } = e.target;

      if (type == 'radio') {
        setSelectedStatus(value)
        setItem((prevItem) => ({
          ...prevItem,
          [name]: value,
        }))
      } else {
        setItem((prevItem) => ({
        ...prevItem,
        [name]: value,
        }));
      }
  };
  const handleCancel = () => {
      setItem(inventoryItem);
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      const updatedData = data.map((item) =>
          item.id === currentItem.id ? currentItem : item
      );
  }

  return (
    <>
    <div className="body__block"></div>
    <main className="form__container">
    <h1 className="form__title">Edit Inventory Item</h1>
    <form onSubmit={handleSubmit}>
      <section className="form__section__container">
        <section className="form__section">
          <h2 className="form__section__title">Item Details</h2>
          <div className="form__questions">
              <label htmlFor="item_name" className="form__label">Item Name</label>
              <input type="text" name="item_name" className="form__input" placeholder={`${currentItem.item_name}`} value={`${currentItem.item_name}`} onChange={handleChange}></input>
          </div>
          <div className="form__questions">
              <label htmlFor="description" className="form__label">Item Description</label>
              <textarea type="text" name="description" className="form__input custom__input" placeholder={`${currentItem.description}`} value={`${currentItem.description}`} onChange={handleChange}></textarea>
          </div>
          <div className="form__questions">
              <label htmlFor="category" className="form__label">Item Category</label>
              <select
              name="category"
              className="form__input"
              value={`${currentItem.category}`} 
              onChange={handleChange}
              required
              >
                <option value="" disabled>Select a Category</option>
                {Array.from(new Set(categories)).map((category)=> (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
          </div>
        </section>
        <section className="form__section divider">
          <h2 className="form__section__title">Item Availibility</h2>
          <div className="form__questions">
            <label htmlFor="status" className="form__label">Status</label>
            <div className="radio">
              <input
                type="radio"
                id="In Stock"
                name="status"
                className="radio__button"
                value="In Stock"
                checked={selectedStatus === 'In Stock'}
                onChange={handleChange}
                required
              />
              <label className="radio__label">In Stock</label>
              <input
                type="radio"
                id="Out of Stock"
                name="status"
                className="radio__button"
                value="Out of Stock"
                checked={selectedStatus === 'Out of Stock'}
                onChange={handleChange}
                required
              />
              <label className="radio__label">Out of Stock</label>
            </div>
          </div>
          {currentItem.status === 'In Stock' && (
          <div className="form__questions">
              <label htmlFor="quantity" className="form__label">Quantity</label>
              <input type="number" name="quantity" className="form__input" placeholder={`${currentItem.quantity}`} value={`${currentItem.quantity}`} onChange={handleChange} required></input>
          </div>
          )}
          <div className="form__questions">
              <label htmlFor="warehouse_id" className="form__label">Warehouse</label>
              <select 
              name="warehouse_id" 
              className="form__input" 
              value={`${currentItem.warehouse_id}`} 
              onChange={handleChange}
              >
                <option value="" disabled>Select a Warehouse</option>
                {warehouseList.map((location) => (
                  <option key={location} value={location}>{location}</option>
                ))}

              </select>
          </div>
        </section>
        </section>
        <div className="form__button__container">
            <button className="form__button-cancel" onClick={handleCancel}>CANCEL</button>
            <button type="submit" className="form__button-save">SAVE</button>
        </div>
    </form>
    </main>
    </>

  );
}

export default InventoryEdit;

