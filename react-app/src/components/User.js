import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUsersReviewsThunk } from "../store/review";
import { getAllIceCreamsThunk } from "../store/icecream";
import "./User.css";

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const reviewList = useSelector(state => Object.values(state.review));
  const icecreamObj = useSelector(state => state.iceCream);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersReviewsThunk(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    dispatch(getAllIceCreamsThunk());
  }, [dispatch]);

  console.log(reviewList, "************reviewList**************");
  console.log(
    icecreamObj,
    "------------------icecreamObj---------------------------"
  );

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div className="main">
      <ul className="container_col profile_header">
        <li>
          <strong>Username</strong> {user.username}
        </li>
        <li>
          <strong>Email</strong> {user.email}
        </li>
        <Link to={`/users/${userId}/edit`}>
          <button className="edit-button">Edit</button>
        </Link>
      </ul>
      <div className="container_col review_feed">
        {reviewList?.forEach(review => (
          <div key={review.id}>
            <h3>Review</h3>
            <h3>{icecreamObj[review?.ice_cream_id]?.flavor_name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
export default User;
