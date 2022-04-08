import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getReviewsThunk } from "../../store/review";


const AverageRating = ({ avg }) => {
    const dispatch = useDispatch();


    // const reviewList = useSelector(state =>
    //     Object.values(state.review).reverse()
    // );

    // let sum = 0;

    // for (let i = 0; i < reviewList.length; i++) {
    //     sum += reviewList[i].rating;
    // }

    // const avgRating = sum / reviewList.length;

    // useEffect(() => {
    //     dispatch(getReviewsThunk(id));
    // }, [dispatch, id]);


    return (
        <>
            {avg > 0 &&
            <li>Rating: {avg}</li>
            }
            {avg === 0 &&
            <li>No reviews yet</li>
            }
        </>
    )
}

export default AverageRating
