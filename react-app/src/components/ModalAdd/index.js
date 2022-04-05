import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddIceCreamForm from './AddIceCream';


function AddIceCreamModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button onClick={() => setShowModal(true)}>Add iceCream</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <AddIceCreamForm />
          </Modal>
        )}
      </>
    );
  }

  export default AddIceCreamModal;
