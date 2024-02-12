import { useState } from 'react';
import './WarehouseAdd.scss';
import { Link } from 'react-router-dom';
import backArrow from '../../assets/icons/arrow_back-24px.svg';
import axios from 'axios';
import { useNavigate } from 'react-router';

function WarehouseAdd() {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const chkPhone = (phone) => {
    var cleaned = phone.replace(/\ |\(|\)|-/g, '');
    if (cleaned[0] === '+' && cleaned.length < 12) return;
    cleaned = cleaned.replace('+', '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return true;
    } else {
      return false;
    }
  };

  const chkEmail = (email) => {
    //Email must include @
    if (email.lastIndexOf('@') === -1) {
      return false;
    }
    return true;
  };

  // Validating Form when submit form
  const handleSubmitValidation = () => {
    const formFields = { ...fields };
    const formErrors = {};
    let formIsValid = true;

    const requiredFormField = [
      'warehouse_name',
      'address',
      'city',
      'country',
      'contact_name',
      'contact_position',
      'contact_phone',
      'contact_email',
    ];

    requiredFormField.forEach((field) => {
      if (!formFields[field]) {
        formIsValid = false;
        document.getElementById(field).classList.add('addForm__input-invalid');
        formErrors[field] = 'Can not be empty';
      }
    });

    if (formIsValid || !formErrors['contact_phone']) {
      // Phone must match the format
      if (!chkPhone(formFields['contact_phone'])) {
        formIsValid = false;
        formErrors['contact_phone'] =
          'Use format: (236) 332-1115 or +1 (236) 332-1115';
        document
          .getElementById('contact_phone')
          .classList.add('addForm__input-invalid');
      }
    }

    if (formIsValid || !formErrors['contact_email']) {
      //Email must include @
      if (!chkEmail(formFields['contact_email'])) {
        formIsValid = false;
        formErrors['contact_email'] = 'Email is not valid';
        document
          .getElementById('contact_email')
          .classList.add('addForm__input-invalid');
      }
    }

    setErrors(formErrors);
    return formIsValid;
  };

  const handleChange = (field, value) => {
    setFields({
      ...fields,
      [field]: value,
    });
  };

  // Validating from when changing focus (onBlur)
  function requiredField(input) {
    const errorMsg = {};
    if (input.value.length < 1) {
      document.getElementById(input.id).classList.add('addForm__input-invalid');
      errorMsg[input.id] = `Can not be empty`;
      setErrors(errorMsg);
    } else if (input.id === 'contact_email') {
      if (chkEmail(input.value)) {
        document
          .getElementById(input.id)
          .classList.remove('addForm__input-invalid');
        errorMsg[input.id] = '';
        setErrors(errorMsg);
      } else {
        document
          .getElementById(input.id)
          .classList.add('addForm__input-invalid');
        errorMsg[input.id] = `Invalid Email`;
        setErrors(errorMsg);
      }
    } else if (input.id === 'contact_phone') {
      if (chkPhone(input.value)) {
        document
          .getElementById(input.id)
          .classList.remove('addForm__input-invalid');
        errorMsg[input.id] = '';
        setErrors(errorMsg);
      } else {
        document
          .getElementById(input.id)
          .classList.add('addForm__input-invalid');
        errorMsg[input.id] = 'Use format (236) 332-1115 or +1 (236) 332-1115';
        setErrors(errorMsg);
      }
    } else {
      document
        .getElementById(input.id)
        .classList.remove('addForm__input-invalid');
      errorMsg[input.id] = '';
      setErrors(errorMsg);
    }
  }

  const AddWarehouse = async (bodyData) => {
    const res = await axios.post(
      'http://localhost:8080/api/warehouses',
      bodyData
    );
    return res.data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById('addForm__form');
    const numFields = form.getElementsByTagName('input').length;
    const newWarehouse = {};
    if (handleSubmitValidation()) {
      for (let i = 0; i < numFields; i++) {
        newWarehouse[e.target[i].name] = e.target[i].value;
      }
      try {
        AddWarehouse(newWarehouse).then((res) => {
          form.reset();
          alert('Adds Successful');
          setFields({});
        });
      } catch (error) {
        console.log('Failed adding warehouse', error);
      }
    } else {
      return;
    }
  };

  return (
    <>
      <div className="body__block"></div>
      <main className="addForm__container">
        <div className="item__header">
          <div className="item__header-container">
            <Link className="item__back-button--link" to="/warehouses">
              <button className="item__back-button">
                <img alt="Back Arrow Icon" src={backArrow} />
              </button>
            </Link>
            <h1 className="item__name">Add Warehouse</h1>
          </div>
        </div>
        <form id="addForm__form" onSubmit={handleSubmit}>
          <section className="addForm__section__container">
            <section className="addForm__section">
              <h2 className="addForm__section__title">Warehouse Details</h2>
              <div className="addForm__questions">
                <div className="addForm__label-container">
                  <label htmlFor="warehouse_name" className="addForm__label">
                    Warehouse Name
                  </label>
                  <span className="addForm__error-msg">
                    {errors['warehouse_name']}
                  </span>
                </div>
                <input
                  id="warehouse_name"
                  type="text"
                  name="warehouse_name"
                  className="addForm__input"
                  placeholder="Vancouver"
                  onChange={(e) =>
                    handleChange('warehouse_name', e.target.value)
                  }
                  onBlur={(e) => requiredField(e.target)}
                  value={fields['warehouse_name']}
                ></input>
              </div>
              <div className="addForm__questions">
                <div className="addForm__label-container">
                  <label htmlFor="address" className="addForm__label">
                    Street Address
                  </label>
                  <span className="addForm__error-msg">
                    {errors['address']}
                  </span>
                </div>
                <input
                  id="address"
                  type="text"
                  name="address"
                  className="addForm__input"
                  placeholder="123 example rd."
                  onChange={(e) => handleChange('address', e.target.value)}
                  value={fields['address']}
                  onBlur={(e) => requiredField(e.target)}
                ></input>
              </div>
              <div className="addForm__questions">
                <div className="addForm__label-container">
                  <label htmlFor="city" className="addForm__label">
                    City
                  </label>
                  <span className="addForm__error-msg">{errors['city']}</span>
                </div>
                <input
                  id="city"
                  type="text"
                  name="city"
                  className="addForm__input"
                  placeholder="Vancouver"
                  onChange={(e) => handleChange('city', e.target.value)}
                  value={fields['city']}
                  onBlur={(e) => requiredField(e.target)}
                ></input>
              </div>
              <div className="addForm__questions">
                <div className="addForm__label-container">
                  <label htmlFor="country" className="addForm__label">
                    Country
                  </label>
                  <span className="addForm__error-msg">
                    {errors['country']}
                  </span>
                </div>
                <input
                  id="country"
                  type="text"
                  name="country"
                  className="addForm__input"
                  placeholder="Canada"
                  onChange={(e) => handleChange('country', e.target.value)}
                  value={fields['country']}
                  onBlur={(e) => requiredField(e.target)}
                ></input>
              </div>
            </section>
            <section className="addForm__section divider">
              <h2 className="addForm__section__title">Contact Details</h2>
              <div className="addForm__questions">
                <div className="addForm__label-container">
                  <label htmlFor="contact_name" className="addForm__label">
                    Contact Name
                  </label>
                  <span className="addForm__error-msg">
                    {errors['contact_name']}
                  </span>
                </div>
                <input
                  id="contact_name"
                  type="text"
                  name="contact_name"
                  className="addForm__input"
                  placeholder="John Smith"
                  onChange={(e) => handleChange('contact_name', e.target.value)}
                  value={fields['contact_name']}
                  onBlur={(e) => requiredField(e.target)}
                ></input>
              </div>
              <div className="addForm__questions">
                <div>
                  <label htmlFor="contact_position" className="addForm__label">
                    Position
                  </label>
                  <span className="addForm__error-msg">
                    {errors['contact_position']}
                  </span>
                </div>
                <input
                  id="contact_position"
                  type="text"
                  name="contact_position"
                  className="addForm__input"
                  placeholder={'Manager'}
                  onChange={(e) =>
                    handleChange('contact_position', e.target.value)
                  }
                  value={fields['contact_position']}
                  onBlur={(e) => requiredField(e.target)}
                ></input>
              </div>
              <div className="addForm__questions">
                <div>
                  <label htmlFor="contact_phone" className="addForm__label">
                    Phone Number
                  </label>
                  <span className="addForm__error-msg">
                    {errors['contact_phone']}
                  </span>
                </div>
                <input
                  id="contact_phone"
                  name="contact_phone"
                  className="addForm__input"
                  placeholder={'+1 (236)-869-8866'}
                  onChange={(e) =>
                    handleChange('contact_phone', e.target.value)
                  }
                  value={fields['contact_phone']}
                  onBlur={(e) => requiredField(e.target)}
                ></input>
              </div>
              <div className="addForm__questions">
                <div className="addForm__label-container">
                  <label htmlFor="contact_email" className="addForm__label">
                    Email
                  </label>
                  <span className="addForm__error-msg">
                    {errors['contact_email']}
                  </span>
                </div>
                <input
                  id="contact_email"
                  name="contact_email"
                  className="addForm__input"
                  placeholder={'example@example.com'}
                  onChange={(e) =>
                    handleChange('contact_email', e.target.value)
                  }
                  value={fields['contact_email']}
                  onBlur={(e) => requiredField(e.target)}
                ></input>
              </div>
            </section>
          </section>
          <div className="addForm__button__container">
            <button
              className="addForm__button-cancel"
              onClick={() => navigate('/warehouses')}
            >
              CANCEL
            </button>
            <button type="submit" className="addForm__button-save">
              + Add Warehouse
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default WarehouseAdd;
