import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getReviewsThunk } from "../../store/review";

import { getAllIceCreamsThunk } from "../../store/icecream";

import AddReviewModal from "../ModalReviewPost";
import EditReviewModal from "../ModalReviewEdit"

import './IceCreamPage.css'
import { getUsersThunk } from '../../store/user';


const IceCreamPage = () => {

  const sessionUser = useSelector(state => state.session.user);

  const dispatch = useDispatch();

  let iceCreamId = useParams().iceCreamId;
  const iceCreamObject = useSelector(state => state.iceCream);
  const currentIceCream = iceCreamObject[iceCreamId];

  const reviewList = useSelector(state =>
    Object.values(state.review).reverse()
  );

  let sum = 0

  for (let i = 0; i < reviewList.length; i++){
    sum += reviewList[i].rating
  }

  const avgRating = sum/reviewList.length


  const userObj = useSelector(state => state.user)


  useEffect(() => {
    dispatch(getAllIceCreamsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getReviewsThunk(iceCreamId));
  }, [dispatch, iceCreamId]);

  useEffect(() => {
    dispatch(getUsersThunk())
  }, [dispatch])


  return (
    <div className="body-iceCreamPage">
      {currentIceCream && (
        <div>

          <div className='main-content-iceCreamPage'>
            <div className='big-image-container'>
              <img src={currentIceCream.icecream_pic_url} alt="IceCream" key={currentIceCream.id} />
            </div>
            <h2 key={currentIceCream.id + "C"}>{currentIceCream.flavor_name}</h2>
            <div className='description-iceCreamPage'>
              <p className='paragraph-iceCreamPage' key={currentIceCream.id + "K"}>{currentIceCream.description}</p>

            </div>
          </div>
          <div>
            <h2>Rating: {`${avgRating}/5`}</h2>
            <h3>Reviews</h3>
            <AddReviewModal />
            {reviewList.length === 0 ? <p>At this moment there are no Reviewsfor this IceCream</p> : null}
            {
            reviewList?.map((review) => (

              <div>
                <li key={review.id + 'O' }>{userObj[review.user_id]?.username}</li>
                <li key={review.id + 'A'}>{review.content}</li>
                <li key={review.id + 'B'}>{`${review.rating}/5`}</li>
                {review.user_id === sessionUser.id &&
                  <EditReviewModal review={review}/>
                }
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
