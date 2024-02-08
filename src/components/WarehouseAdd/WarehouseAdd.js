import { useState } from 'react';
import './WarehouseAdd.scss';
import axios from 'axios';

function WarehouseAdd() {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

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

    if (formIsValid) {
      // Phone must match the format
      if (!chkPhone(formFields['contact_phone'])) {
        formIsValid = false;
        formErrors['contact_phone'] =
          'Must follow this format (236) 332-1115 or +1 (236) 332-1115';
        document
          .getElementById('contact_phone')
          .classList.add('addForm__input-invalid');
      }
    }

    if (formIsValid) {
      //Email must include @
      if (!chkEmail(formFields['contact_email'])) {
        formIsValid = false;
        formFields['contact_email'] = 'Email is not valid';
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
        errorMsg[
          input.id
        ] = `Invalid Phone Number. Must follow this format (236) 332-1115 or +1 (236) 332-1115`;
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
      AddWarehouse(newWarehouse).then((res) => {
        console.log(res);
      });
      alert('Form submitted');
    } else {
      alert('Form has errors.');
    }
  };

  return (
    <>
      <main className="addForm__container">
        <h1 className="addForm__title">Add Warehouse</h1>
        <form id="addForm__form" onSubmit={handleSubmit}>
          <section className="addForm__section__container">
            <section className="addForm__section">
              <h2 className="addForm__section__title">Warehouse Details</h2>
              <div className="addForm__questions">
                <label htmlFor="warehouse_name" className="addForm__label">
                  Warehouse Name
                </label>
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
                <span className="addForm__error-msg">
                  {errors['warehouse_name']}
                </span>
              </div>
              <div className="addForm__questions">
                <label htmlFor="address" className="addForm__label">
                  Street Address
                </label>
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
                <span className="addForm__error-msg">{errors['address']}</span>
              </div>
              <div className="addForm__questions">
                <label htmlFor="city" className="addForm__label">
                  City
                </label>
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
                <span className="addForm__error-msg">{errors['city']}</span>
              </div>
              <div className="addForm__questions">
                <label htmlFor="country" className="addForm__label">
                  Country
                </label>
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
                <span className="addForm__error-msg">{errors['country']}</span>
              </div>
            </section>
            <section className="addForm__section divider">
              <h2 className="addForm__section__title">Contact Details</h2>
              <div className="addForm__questions">
                <label htmlFor="contact_name" className="addForm__label">
                  Contact Name
                </label>
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
                <span className="addForm__error-msg">
                  {errors['contact_name']}
                </span>
              </div>
              <div className="addForm__questions">
                <label htmlFor="contact_position" className="addForm__label">
                  Position
                </label>
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
                <span className="addForm__error-msg">
                  {errors['contact_position']}
                </span>
              </div>
              <div className="addForm__questions">
                <label htmlFor="contact_phone" className="addForm__label">
                  Phone Number
                </label>
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
                <span className="addForm__error-msg">
                  {errors['contact_phone']}
                </span>
              </div>
              <div className="addForm__questions">
                <label htmlFor="contact_email" className="addForm__label">
                  Email
                </label>
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
                <span className="addForm__error-msg">
                  {errors['contact_email']}
                </span>
              </div>
            </section>
          </section>
          <div className="addForm__button__container">
            <button className="addForm__button-cancel">CANCEL</button>
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
