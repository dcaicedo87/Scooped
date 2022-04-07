import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditReview from "./EditReview";

function EditReviewModal({review}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Edit 
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReview review={review}/>
        </Modal>
      )}
    </>
  );
}

export default EditReviewModal;
