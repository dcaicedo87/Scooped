import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { addReviewThunk } from "../../store/review";
import "../HomePage/homepage.css";

function AddReview() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const ice_cream_id = useParams().iceCreamId;

  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState([])

  const handleSubmit = e => {
    e.preventDefault();
    let review = {
      content,
      rating: +rating,
      user_id: sessionUser.id,
      ice_cream_id,
    };

    //error validation
    setErrors([])

    const newErrors = [];

    if (review.content.length < 4) {
      newErrors.push("Content must be 4 characters or more.");
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    dispatch(addReviewThunk(review));
    window.location.reload(false);
  };

  return (
    <div>
      <div>
        <ul className="post-review-errors">
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
        </ul>
      </div>
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
    </div>
  );
}

export default AddReview;
