import "./WarehouseEdit.scss";
import { useEffect, useState} from 'react';
import axios from "axios";
const { REACT_APP_API_BASE_PATH } = process.env


const WarehouseEdit = ({warehouse}) => {
    const [currentWarehouse,setWarehouse] = useState(warehouse)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWarehouse((prevWarehouse) => ({
            ...prevWarehouse,
            [name]: value,
        }));

    };
    const handleCancel = (e) => {
        e.preventDefault();
        setWarehouse(warehouse);
        return alert('Refreshed to original values');
    }


    const handleSubmit = async(e) => {
        e.preventDefault();

        if (
            !currentWarehouse.warehouse_name ||
            !currentWarehouse.address ||
            !currentWarehouse.city ||
            !currentWarehouse.country ||
            !currentWarehouse.contact_name ||
            !currentWarehouse.contact_position ||
            !currentWarehouse.contact_phone ||
            !currentWarehouse.contact_email
            ){
              alert('All fields must be filled');
              return;
            }

        try {
            const updatedWarehouse = {
                warehouse_name: currentWarehouse.warehouse_name,
                address: currentWarehouse.address,
                city: currentWarehouse.city,
                country: currentWarehouse.country,
                contact_name: currentWarehouse.contact_name,
                contact_position: currentWarehouse.contact_position,
                contact_phone: currentWarehouse.contact_phone,
                contact_email: currentWarehouse.contact_email,
            };
            const response = await axios.put(`${REACT_APP_API_BASE_PATH}/api/warehouses/${warehouse.id}`,updatedWarehouse);
            return alert("Updates Successful");
          } catch (error) {
            console.error('Error updating warehouse:', error);
   
          }
        };
        

    return (
        <>
        <div className="body__block"></div>
        <main className="form__container">
        <h1 className="form__title" onClick={() => window.history.back()} >Edit Warehouse</h1>
        <form onSubmit={handleSubmit}>
          <section className="form__section__container">
            <section className="form__section">
              <h2 className="form__section__title">Warehouse Details</h2>
              <div className="form__questions">
                  <label htmlFor="warehouse_name" className="form__label">Warehouse Name</label>
                  <input type="text" name="warehouse_name" className="form__input" placeholder={`${currentWarehouse.warehouse_name}`} value={`${currentWarehouse.warehouse_name}`} onChange={handleChange}></input>
              </div>
              <div className="form__questions">
                  <label htmlFor="address" className="form__label">Street Address</label>
                  <input type="text" name="address" className="form__input" placeholder={`${currentWarehouse.address}`} value={`${currentWarehouse.address}`} onChange={handleChange}></input>
              </div>
              <div className="form__questions">
                  <label htmlFor="city" className="form__label">City</label>
                  <input type="text" name="city" className="form__input" placeholder={`${currentWarehouse.city}`} value={`${currentWarehouse.city}`} onChange={handleChange}></input>
              </div>
              <div className="form__questions">
                  <label htmlFor="country" className="form__label">Country</label>
                  <input type="text" name="country" className="form__input" placeholder={`${currentWarehouse.country}`} value={`${currentWarehouse.country}`} onChange={handleChange} ></input>
              </div>
            </section>
            <section className="form__section divider">
              <h2 className="form__section__title">Contact Details</h2>
              <div className="form__questions">
                  <label htmlFor="contact_name" className="form__label">Contact Name</label>
                  <input type="text" name="contact_name" className="form__input" placeholder={`${currentWarehouse.contact_name}`} value={`${currentWarehouse.contact_name}`} onChange={handleChange}></input>
              </div>
              <div className="form__questions">
                  <label htmlFor="contact_position" className="form__label">Position</label>
                  <input type="text" name="contact_position" className="form__input" placeholder={`${currentWarehouse.contact_position}`} value={`${currentWarehouse.contact_position}`} onChange={handleChange}></input>
              </div>
              <div className="form__questions">
                  <label htmlFor="contact_phone" className="form__label">Phone Number</label>
                  <input type="tel" name="contact_phone" className="form__input" placeholder={`${currentWarehouse.contact_phone}`} value={`${currentWarehouse.contact_phone}`} onChange={handleChange}></input>
              </div>
              <div className="form__questions">
                  <label htmlFor="contact_email" className="form__label">Email</label>
                  <input type="email" name="contact_email" className="form__input" placeholder={`${currentWarehouse.contact_email}`} value={`${currentWarehouse.contact_email}`} onChange={handleChange}></input>
              </div>
            </section>
            </section>
            <div className="form__button__container">
                <button className="form__button-cancel" onClick={handleCancel} >CANCEL</button>
                <button type="submit" className="form__button-save">SAVE</button>
            </div>
        </form>
        </main>
        </>
       
    )

}
export default WarehouseEdit;
