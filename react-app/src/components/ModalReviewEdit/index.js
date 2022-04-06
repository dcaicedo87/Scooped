import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditReview from "./EditReview";

import "../HomePage/homepage.css";

function EditReviewModal({review}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="big-button" onClick={() => setShowModal(true)}>
        Edit review
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
