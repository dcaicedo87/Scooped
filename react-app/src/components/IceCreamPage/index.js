import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getReviewsThunk, deleteReviewThunk } from "../../store/review";

import { getAllIceCreamsThunk } from "../../store/icecream";

import AddReviewModal from "../ModalReviewPost";
import EditReviewModal from "../ModalReviewEdit";

import "./IceCreamPage.css";
import { getUsersThunk } from "../../store/user";

const IceCreamPage = () => {
  const dispatch = useDispatch();

  let id_of_icecream = useParams().iceCreamId;

  const iceCreamObject = useSelector(state => state.iceCream);
  const sessionUser = useSelector(state => state.session.user);
  const currentIceCream = iceCreamObject[id_of_icecream];

  const reviewList = useSelector(state =>
    Object.values(state.review).reverse()
  );

  let sum = 0;

  for (let i = 0; i < reviewList.length; i++) {
    sum += reviewList[i].rating;
  }

  const avgRating = sum / reviewList.length;

  const userObj = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getAllIceCreamsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getReviewsThunk(id_of_icecream));
  }, [dispatch, id_of_icecream, userObj]);

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  const deleteReview = id => {
    dispatch(deleteReviewThunk(id));
  };

  return (
    <div className="body-iceCreamPage">
      {currentIceCream && (
        <div>
          <div className="main-content-iceCreamPage">
            <div className="big-image-container">
              <img
                src={currentIceCream.icecream_pic_url}
                alt="IceCream"
                key={currentIceCream.id}
              />
            </div>
            <h2 key={currentIceCream.id + "C"}
            className="ice-cream-name-title">
              {currentIceCream.flavor_name}
            </h2>
            <h3 className="rating-with-number">
              Rating:
              {reviewList[0]?.ice_cream_id === currentIceCream?.id
                ? ` ${avgRating}/5`
                : ` 0/5`}
            </h3>
            <div className="description-iceCreamPage">
              <p
                className="paragraph-iceCreamPage"
                key={currentIceCream.id + "K"}
              >
                {currentIceCream.description}
              </p>
            </div>
          </div>
          <div>
            <AddReviewModal />
            {reviewList.length === 0 ? (
              <p className="error-paragraph">This iceCream doesn't have any reviews yet</p>
            ) : null}
            {reviewList.length > 0 &&
            <div className="review-container">
              {reviewList[0]?.ice_cream_id === currentIceCream?.id &&
                reviewList?.map(review => (
                  <>
                    <ul style={{ textDecoration: "none" }} className="single-review-container">
                      <div className="single-review-upper">
                        <li
                          key={review.id + "O"}
                          className="review-username"
                        >
                          {userObj[review.user_id]?.username}
                        </li>
                        <li key={review.id + "B"}>
                          Rating: {`${review.rating}/5`}
                        </li>
                      </div>
                      <div className="single-review-lower">
                        <li key={review.id + "A"} className="single-review-content">
                          {review.content}
                        </li>
                        {review.user_id === sessionUser.id && (
                          <div className="single-review-buttons">
                            <EditReviewModal review={review} />
                            <button onClick={() => deleteReview(review.id)}>
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </ul>
                  </>
                ))}
            </div>
            }
          </div>
        </div>
      )}
    </div>
  );
};

// return (
//   <>
//   </>
// )

export default IceCreamPage;
