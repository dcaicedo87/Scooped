import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditIceCreamForm from './EditIceCream';


function EditIceCreamModal({iceCream}) {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button onClick={() => setShowModal(true)}>Edit iceCream</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditIceCreamForm iceCream={iceCream}/>
          </Modal>
        )}
      </>
    );
  }

  export default EditIceCreamModal;
