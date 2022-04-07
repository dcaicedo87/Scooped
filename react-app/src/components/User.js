import React, { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUsersReviewsThunk } from "../store/review";
import { getAllIceCreamsThunk } from "../store/icecream";
import "./User.css";

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const reviewList = useSelector(state => Object.values(state.review));
  const icecreamObj = useSelector(state => state.iceCream);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersReviewsThunk(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    dispatch(getAllIceCreamsThunk());
  }, [dispatch]);

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

  let sum = 0;
  reviewList.forEach(review => {
    sum += review.rating;
  });

  const avg = sum / reviewList.length;

  return (
    <div className="main">
      <ul className="container_col profile_header">
        <li>
          <strong>Username</strong> {user.username}
        </li>
        <li>
          <strong>Email</strong> {user.email}
        </li>
        {sessionUser.id === user.id && (
          <Link to={`/users/${userId}/edit`}>
            <button className="edit-button">Edit</button>
          </Link>
        )}
      </ul>
      <div className="container_col review_feed">
        <h2 className="prof_h2">{user.username}'s Reviews</h2>
        <h2>
          Average Rating: {Number.isInteger(avg) ? avg : avg.toFixed(1)}/5
        </h2>
        {reviewList?.map(review => (
          <div key={review.id} className="review_card container_row">
            <NavLink to={`/iceCream/${review.ice_cream_id}`}>
              <img
                alt="icecream"
                src={icecreamObj[review?.ice_cream_id]?.icecream_pic_url}
                className="icecream-img-profile"
              />
            </NavLink>
            <div className="prof_grid">
              {/* <div className="container_col prof_icecream_header"> */}
              <h3 className="prof_h3">
                {icecreamObj[review?.ice_cream_id]?.flavor_name}
              </h3>
              <p>Rating: {review.rating}/5</p>
              {/* </div> */}
              <div className="prof_review_content">
                <p>{review.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default User;
