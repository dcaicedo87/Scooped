import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getReviewsThunk } from '../../store/review';


const IceCreamPage = () => {

    const dispatch = useDispatch();
    const { iceCreamId } = useParams();
    const reviewList = useSelector((state) => Object.values(state.review).reverse());
    const sessionUser = useSelector(state => state.session.user);



    useEffect(() => {
        dispatch(getReviewsThunk(iceCreamId));
    }, [dispatch]);



    return (
        <>
            <div>
                <h1>Ice Cream</h1>
                {reviewList.length === 0 ? <p>At this moment there are no Answers to this Question</p> : null}
                {reviewList?.map(({ id, content, rating, userId, IceCreamId }) => (
                    <div>
                        <p key={id}>{content}</p>
                        <p key={id}>{rating}</p>
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default IceCreamPage
