import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { addReviewThunk } from "../../store/review";
import "../HomePage/homepage.css";

function AddReview() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const history = useHistory();
  const ice_cream_id = useParams().iceCreamId;

  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    let review = {
      content,
      rating: +rating,
      user_id: sessionUser.id,
      ice_cream_id,
    };
    dispatch(addReviewThunk(review));
    window.location.reload(false);
    history.push(`/iceCreams/${ice_cream_id}`);
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
      <button type="submit">Add Review</button>
    </form>
  );
}

export default AddReview;
