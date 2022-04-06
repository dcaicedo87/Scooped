import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getReviewsThunk } from "../../store/review";

import { getAllIceCreamsThunk } from "../../store/icecream";
import AddReviewModal from "../ModalReviewPost";

import "./IceCreamPage.css";
import { getUsersThunk } from "../../store/user";

const IceCreamPage = () => {
  const dispatch = useDispatch();
  let id_of_icecream = useParams().iceCreamId;
  const iceCreamObject = useSelector(state => state.iceCream);
  const currentIceCream = iceCreamObject[id_of_icecream];

  console.log(currentIceCream, "111111111111111111111111");

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
            <h2 key={currentIceCream.id + "C"}>
              {currentIceCream.flavor_name}
            </h2>
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
            <h2>
              Rating:
              {reviewList[0]?.ice_cream_id === currentIceCream?.id
                ? `${avgRating}/5`
                : `0/5`}
            </h2>
            <h3>Reviews</h3>
            <AddReviewModal />
            {reviewList.length === 0 ? (
              <p>At this moment there are no Reviews for this IceCream</p>
            ) : null}
            {reviewList[0]?.ice_cream_id === currentIceCream?.id &&
              reviewList?.map(({ id, content, rating, user_id }) => (
                <div>
                  <li key={id + "O"}>{userObj[user_id]?.username}</li>
                  <li key={id + "A"}>{content}</li>
                  <li key={id + "B"}>{`${rating}/5`}</li>
                </div>
              ))}
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
