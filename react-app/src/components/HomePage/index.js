import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

import { getAllIceCreamsThunk } from "../../store/icecream"

const HomePage = () => {

    const dispatch = useDispatch()

    const sessionUser = useSelector(state => state.session.user);
    const iceCreamArray = useSelector(state => state.iceCream)
    console.log(iceCreamArray)
    const thisIceCream = iceCreamArray[0]


    useEffect(() => {
        dispatch(getAllIceCreamsThunk())
    }, [dispatch])


    return (
        <>
            <h1>IceCreams</h1>
            <div>
                {thisIceCream.flavor_name}
            </div>
        </>
    )
}

export default HomePage
