import { Link } from "react-router-dom";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { useState, useEffect } from "react";
import axios from "axios";
const { REACT_APP_API_BASE_PATH } = process.env;

function InventoryAdd({ inventoryList, allWarehouses }) {
  //Create Drop Down Lists
  const categories = inventoryList.map((category) => category.category);
  const warehouseList = allWarehouses.map((place) => ({
    id: place.id,
    name: place.warehouse_name,
  }));

  //States
  const item = {
    item_name: "",
    description: "",
    category: "",
    status: "Out of Stock",
    quantity: "0",
    warehouse_id: "",
  };

  const [originalStatus, setOriginalStatus] = useState(item.status);
  const [currentItem, setItem] = useState(item);

  useEffect(() => {
    setOriginalStatus(item.status);
  }, [item.status]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "radio") {
      setItem((prevItem) => ({
        ...prevItem,
        [name]: value,
        quantity: value === "Out of Stock" ? 0 : prevItem.quantity,
      }));
    } else {
      setItem((prevItem) => ({
        ...prevItem,
        [name]: name === "warehouse_id" ? Number(value) : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your form submission logic

    if (!currentItem.item_name || !currentItem.description) {
      alert("All fields must be filled");
      return;
    }

    if (currentItem.status === "In Stock" && currentItem.quantity === "0") {
      alert("Quantity cannot be 0");
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
      };
      const response = await axios.post(
        `${REACT_APP_API_BASE_PATH}/api/inventories/`,
        updatedItem
      );
      alert("Success! New item has been added.");
    } catch (error) {
      console.error("Error update item:", error);
    }
  };

  const handleCancel = (e) => {
    // Reset the form to initial values
    e.preventDefault();
    setItem({
      item_name: "",
      description: "",
      category: "",
      status: "Out of Stock",
      quantity: "0",
      warehouse_id: "",
    });
    return alert("form has been cleared");
  };

  return (
    <>
      <div className="body__block"></div>
      <main className="form__container">
        <div className="item__header">
          <div className="item__header-container">
            <Link className="item__back-button--link" to="/inventories">
              <button className="item__back-button">
                <img alt="Back Arrow Icon" src={backArrow} />
              </button>
            </Link>
            <h1 className="item__name">Add Inventory Item</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <section className="form__section__container">
            <section className="form__section">
              <h2 className="form__section__title">Item Details</h2>
              <div className="form__questions">
                <label htmlFor="item_name" className="form__label">
                  Item Name
                </label>
                <input
                  type="text"
                  name="item_name"
                  className="form__input"
                  placeholder="Please enter item name"
                  value={`${currentItem.item_name}`}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form__questions">
                <label htmlFor="description" className="form__label">
                  Item Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  className="form__input custom__input"
                  placeholder="Please enter a brief description..."
                  value={`${currentItem.description}`}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form__questions">
                <label htmlFor="category" className="form__label">
                  Item Category
                </label>
                <select
                  name="category"
                  className="form__input--addPage2"
                  value={`${currentItem.category}`}
                  onChange={handleChange}
                >
                  <option value="">Please Select</option>
                  {Array.from(new Set(categories)).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </section>
            <section className="form__section divider">
              <h2 className="form__section__title">Item Availibility</h2>
              <div className="form__questions">
                <label htmlFor="status" className="form__label">
                  Status
                </label>
                <div className="radio">
                  <input
                    type="radio"
                    id="In Stock"
                    name="status"
                    className="radio__button"
                    value="In Stock"
                    checked={currentItem.status === "In Stock"}
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
                    checked={currentItem.status === "Out of Stock"}
                    onChange={handleChange}
                    required
                  />
                  <label className="radio__label">Out of Stock</label>
                </div>
              </div>
              {currentItem.status === "In Stock" && (
                <div className="form__questions">
                  <label htmlFor="quantity" className="form__label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    className="form__input"
                    placeholder="Please enter quantity"
                    value={`${currentItem.quantity}`}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              )}
              <div className="form__questions">
                <label htmlFor="warehouse_id" className="form__label">
                  Warehouse
                </label>
                <select
                  name="warehouse_id"
                  className="form__input--addPage2"
                  value={`${currentItem.warehouse_id}`}
                  onChange={handleChange}
                >
                  <option value="">Please Select</option>
                  {warehouseList.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
            </section>
          </section>
          <div className="form__button__container">
            <button
              type="cancel"
              className="form__button-cancel"
              onClick={handleCancel}
            >
              CANCEL
            </button>
            <button type="submit" className="form__button-save">
              SAVE
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default InventoryAdd;
