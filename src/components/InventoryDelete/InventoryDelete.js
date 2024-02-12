import axios from 'axios';
import './InventoryDelete.scss';
const { REACT_APP_API_BASE_PATH } = process.env;

function InventoryDelete({ id, showModal, updateList, inventory }) {
  const handleDelete = async (id) => {
    await axios.delete(`${REACT_APP_API_BASE_PATH}/api/inventories/${id}`);
    updateList(id);
    showModal();
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="delete">
        <div className="delete__message-container">
          <h1 className="delete__title">Delete {inventory.item_name} item?</h1>
          <p className="delete__message">
            Please confirm that you’d like to delete the {inventory.item_name}{' '}
            from inventory list. You won’t be able to undo this action.
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

export default InventoryDelete;
