import "./InventoryEdit.scss";
import { useState, useEffect} from 'react';
import axios from "axios";
const { REACT_APP_API_BASE_PATH } = process.env

function InventoryEdit({ item, inventoryList, allWarehouses}) {

  //Create's Drop Down Lists 
  const categories = inventoryList.map(category => category.category);
  const warehouseList = allWarehouses.map(place => ({ id: place.id, name: place.warehouse_name }));

  // const warehouses = allWarehouses.map(place => place.warehouse_name);
  // const warehouseList = [...new Set(warehouses)];

  //States
  const [originalStatus, setOriginalStatus] = useState(item.status);
  const [currentItem, setItem] = useState(item)

  useEffect(() => {
    setOriginalStatus(item.status);
  }, [item.status]);

  const handleChange = (e) => {
      const { name, value, type } = e.target;

      if (type === 'radio') {
        setItem((prevItem) => ({
          ...prevItem,
          [name]: value,
          quantity: value === 'Out of Stock' ? 0 : prevItem.quantity,
        }))
      } else {
        setItem((prevItem) => ({
        ...prevItem,
        // [name]: value,
        [name]: name === 'warehouse_id' ? Number(value) : value,
        }));
      }
  };

  const handleSubmit = async(e) => {
      e.preventDefault();

      if (
        !currentItem.item_name ||
        !currentItem.description
        ){
          alert('All fields must be filled');
          return;
        }

      if (currentItem.status === 'In Stock' && currentItem.quantity === 0) {
        alert('Quantity cannot be 0');
        return;
      }

      try {
        const updatedItem = {
          warehouse_id: Number(currentItem.warehouse_id),
          item_name: String(currentItem.item_name),
          description: String(currentItem.description),
          category: String(currentItem.category),
          status: String(currentItem.status),
          quantity: String(currentItem.quantity),
        }
        console.log(updatedItem)
        const response = await axios.put (`${REACT_APP_API_BASE_PATH}/api/inventories/${item.id}`,updatedItem )
        alert("Updates Successful");
      } catch (error) {
        console.error('Error update item:', error);
      } 
  }

  const handleCancel = (e) => {
    e.preventDefault();
    setItem(item);
    return alert('refreshed to original values')
  }

  return (
    <>
    <div className="body__block"></div>
    <main className="form__container">
    <h1 className="form__title" onClick={() => window.history.back()}>Edit Inventory Item</h1>
    <form onSubmit={handleSubmit}>
      <section className="form__section__container">
        <section className="form__section">
          <h2 className="form__section__title">Item Details</h2>
          <div className="form__questions">
              <label htmlFor="item_name" className="form__label">Item Name</label>
              <input type="text" name="item_name" className="form__input" placeholder="Please enter item name" value={`${currentItem.item_name}`} onChange={handleChange}></input>
          </div>
          <div className="form__questions">
              <label htmlFor="description" className="form__label">Item Description</label>
              <textarea type="text" name="description" className="form__input custom__input" placeholder="Please enter a brief description..." value={`${currentItem.description}`} onChange={handleChange}></textarea>
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
                <option value="" disabled>Please Select</option>
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
                checked={currentItem.status === 'In Stock'}
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
                checked={currentItem.status === 'Out of Stock'}
                onChange={handleChange}
                required
              />
              <label className="radio__label">Out of Stock</label>
            </div>
          </div>
          {currentItem.status === 'In Stock' && (
          <div className="form__questions">
              <label htmlFor="quantity" className="form__label">Quantity</label>
              <input type="number" name="quantity" className="form__input" placeholder="Please enter quantity" value={`${currentItem.quantity}`} onChange={handleChange} required></input>
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
                <option value="" disabled>Please Select</option>
                {warehouseList.map((location) => (
                  <option key={location.id} value={location.id}>{location.name}</option>
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

