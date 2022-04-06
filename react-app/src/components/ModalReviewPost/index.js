import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import AddReview from "./AddReview";

import "../HomePage/homepage.css";

function AddReviewModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="big-button" onClick={() => setShowModal(true)}>
        Add review
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddReview />
        </Modal>
      )}
    </>
  );
}

export default AddReviewModal;
