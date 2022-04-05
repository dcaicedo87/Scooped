import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditIceCreamForm from './EditIceCream';

import "../HomePage/homepage.css"

function EditIceCreamModal({iceCream}) {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button className='edit-button' onClick={() => setShowModal(true)}>Edit</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditIceCreamForm iceCream={iceCream}/>
          </Modal>
        )}
      </>
    );
  }

  export default EditIceCreamModal;
