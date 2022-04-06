import React, { useEffect } from 'react';
// import React from "react"; // <====================================== PLEASE COMMENT OUT THIS LINE & UNCOMMENT ABOVE IF YOU USE useState&useEffect
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

import { getAllIceCreamsThunk } from "../../store/icecream";

import './IceCreamPage.css'
// =================== COMMENTED OUT ABOVE FOR THE DEPLOYMENT PURPOSE ============ delete this line

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

export default IceCreamPage;
