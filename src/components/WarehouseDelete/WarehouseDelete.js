import axios from 'axios';
import './WarehouseDelete.scss';
const { REACT_APP_API_BASE_PATH } = process.env;

function WarehouseDelete({ id, showModal, updateList, warehouse }) {
  const handleDelete = async (id) => {
    await axios.delete(`${REACT_APP_API_BASE_PATH}/api/warehouses/${id}`);
    updateList(id);
    showModal();
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="delete">
        <div className="delete__message-container">
          <h1 className="delete__title">
            Delete {warehouse.warehouse_name} warehouse?
          </h1>
          <p className="delete__message">
            Please confirm that you’d like to delete the{' '}
            {warehouse.warehouse_name} from the list of warehouses. You won’t be
            able to undo this action.
          </p>
        </div>
        <div className="delete__button-container">
          <button
            className="delete__button delete__button-cancel"
            onClick={showModal}
          >
            Cancel
          </button>
          <button
            className="delete__button delete__button-delete"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default WarehouseDelete;
