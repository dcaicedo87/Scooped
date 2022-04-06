import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { editReviewThunk } from "../../store/review";
import "../HomePage/homepage.css";

function EditReview({review}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const history = useHistory();
  const ice_cream_id = useParams().iceCreamId;

  const [content, setContent] = useState(review.content);
  const [rating, setRating] = useState(review.rating);

  const handleSubmit = e => {
    e.preventDefault();
    let updatedReview = {
      id: review.id,
      content,
      rating: +rating,
      user_id: sessionUser.id,
      ice_cream_id,
    };
    dispatch(editReviewThunk(updatedReview));
    window.location.reload(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Review Content
        <input
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
      </label>
      <label>
        Rating
        <select
          value={rating}
          onChange={e => setRating(e.target.value)}
          required
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <button type="submit">Confirm</button>
    </form>
  );
}

export default EditReview;
