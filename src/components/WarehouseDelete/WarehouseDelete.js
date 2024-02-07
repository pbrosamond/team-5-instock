import './WarehouseDelete.scss';

import { Link } from 'react-router-dom';

function WarehouseDelete() {
  return (
    <>
      <div className="overlay"></div>
      <div className="delete">
        <div className="delete__message-container">
          <h1 className="delete__title">Delete Washington warehouse?</h1>
          <p className="delete__message">
            Please confirm that you’d like to delete the Washington from the
            list of warehouses. You won’t be able to undo this action.
          </p>
        </div>
        <div className="delete__button-container">
          <button className="delete__button delete__button-cancel">
            Cancel
          </button>
          <button className="delete__button delete__button-delete">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default WarehouseDelete;
