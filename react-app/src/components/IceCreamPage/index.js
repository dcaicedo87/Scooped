import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { getReviewsThunk } from '../../store/review';

import { getAllIceCreamsThunk } from "../../store/icecream";

import './IceCreamPage.css'


const IceCreamPage = () => {

  const dispatch = useDispatch();
  let iceCreamId = useParams().iceCreamId
  const iceCreamObject = useSelector(state => state.iceCream)
  const currentIceCream = iceCreamObject[iceCreamId]

  const reviewList = useSelector(state => Object.values(state.review).reverse())

  useEffect(() => {
    dispatch(getAllIceCreamsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getReviewsThunk(iceCreamId));
  }, [dispatch]);







  return (
    <div className='body-iceCreamPage'>
      {currentIceCream &&
        <div>
          <div className='main-content-iceCreamPage'>
            <div className='big-image-container'>
              <img src={currentIceCream.icecream_pic_url} alt="IceCream" />
            </div>
            <h2>{currentIceCream.flavor_name}</h2>
            <div className='description-iceCreamPage'>
              <p className='paragraph-iceCreamPage'>{currentIceCream.description}</p>
            </div>
          </div>
          <div>
            <h3>Reviews</h3>
            {reviewList.length === 0 ? <p>At this moment there are no Reviewsfor this IceCream</p> : null}
            {reviewList?.map(({ id, content, rating }) => (
              <div>
                <p key={id}>{content}</p>
                <p key={id}>{rating}</p>
              </div>
            ))
            }
          </div>
        </div>
      }
    </div>
  );
};

// return (
//   <>
//   </>
// )

export default IceCreamPage;
