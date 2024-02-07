import "./WarehouseEdit.scss";
import data from '../../data/warehouses.json';
import { useState} from 'react';

// import { Link } from "react-router-dom";


const WarehouseEdit = ({id}) => {

    const warehouse = data[id];
    const [currentWarehouse, setWarehouse] = useState(warehouse)
    console.log(warehouse)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWarehouse((prevWarehouse) => ({
            ...prevWarehouse,
            [name]: value,
        }));
    };
    const handleCancel = () => {
        setWarehouse(warehouse);
    }

    console.log(warehouse);
    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedData = data.map((warehouse) =>
            warehouse.id === currentWarehouse.id ? currentWarehouse : warehouse
        );

        console.log(updatedData[0])
    }


    return (
        <>
        <main className="form__container">
        <h1 className="form__title">Edit Warehouse</h1>
        <form onSubmit={handleSubmit}>
          <section className="form__section__container">
            <section className="form__section">
              <h2 className="form__section__title">Warehouse Details</h2>
              <div className="form__questions">
                  <label htmlFor="warehouse_name" className="form__label">Warehouse Name</label>
                  <input type="text" name="warehouse_name" className="form__input" placeholder={`${currentWarehouse.warehouse_name}`} value={`${currentWarehouse.warehouse_name}`} onChange={handleChange} required></input>
              </div>
              <div className="form__questions">
                  <label htmlFor="address" className="form__label">Street Address</label>
                  <input type="text" name="address" className="form__input" placeholder={`${currentWarehouse.address}`} value={`${currentWarehouse.address}`} onChange={handleChange} required></input>
              </div>
              <div className="form__questions">
                  <label htmlFor="city" className="form__label">City</label>
                  <input type="text" name="city" className="form__input" placeholder={`${currentWarehouse.city}`} value={`${currentWarehouse.city}`} onChange={handleChange}required></input>
              </div>
              <div className="form__questions">
                  <label htmlFor="country" className="form__label">Country</label>
                  <input type="text" name="country" className="form__input" placeholder={`${currentWarehouse.country}`} value={`${currentWarehouse.country}`} onChange={handleChange} required></input>
              </div>
            </section>
            {/* <div className="divider">hi</div> */}
            <section className="form__section divider">
              <h2 className="form__section__title">Contact Details</h2>
              <div className="form__questions">
                  <label htmlFor="contact_name" className="form__label">Contact Name</label>
                  <input type="text" name="contact_name" className="form__input" placeholder={`${currentWarehouse.contact_name}`} value={`${currentWarehouse.contact_name}`} onChange={handleChange} required></input>
              </div>
              <div className="form__questions">
                  <label htmlFor="contact_position" className="form__label">Position</label>
                  <input type="text" name="contact_position" className="form__input" placeholder={`${currentWarehouse.contact_position}`} value={`${currentWarehouse.contact_position}`} onChange={handleChange} required></input>
              </div>
              <div className="form__questions">
                  <label htmlFor="contact_phone" className="form__label">Phone Number</label>
                  <input type="tel" name="contact_phone" className="form__input" placeholder={`${currentWarehouse.contact_phone}`} value={`${currentWarehouse.contact_phone}`} onChange={handleChange} required></input>
              </div>
              <div className="form__questions">
                  <label htmlFor="contact_email" className="form__label">Email</label>
                  <input type="email" name="contact_email" className="form__input" placeholder={`${currentWarehouse.contact_email}`} value={`${currentWarehouse.contact_email}`} onChange={handleChange} required></input>
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
       
    )

}

export default WarehouseEdit;
