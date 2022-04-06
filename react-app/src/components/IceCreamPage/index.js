import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

//import { getReviewsThunk } from '../../store/review';

import { getAllIceCreamsThunk } from "../../store/icecream";

import './IceCreamPage.css'


const IceCreamPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllIceCreamsThunk());
  }, [dispatch]);

  const iceCreamObject = useSelector(state => state.iceCream)
  console.log(iceCreamObject)

  let iceCreamId = useParams().iceCreamId
  console.log(iceCreamId)

  const currentIceCream = iceCreamObject[iceCreamId]
  console.log(currentIceCream)


  return (
    <div className='body-iceCreamPage'>
      {currentIceCream &&
        <div className='main-content-iceCreamPage'>
          <div className='big-image-container'>
            <img src={currentIceCream.icecream_pic_url} alt="IceCream" />
          </div>
          <h2>{currentIceCream.flavor_name}</h2>
          <div className='description-iceCreamPage'>
            <p className='paragraph-iceCreamPage'>{currentIceCream.description}</p>
          </div>
        </div>
      }
    </div>
  );
};

// return (
//   <>
//       <div>
//           <h1>Ice Cream</h1>
//           {reviewList.length === 0 ? <p>At this moment there are no Answers to this Question</p> : null}
//           {reviewList?.map(({ id, content, rating, userId, IceCreamId }) => (
//               <div>
//                   <p key={id}>{content}</p>
//                   <p key={id}>{rating}</p>
//               </div>
//           ))
//           }
//       </div>
//   </>
// )

export default IceCreamPage;
