import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

import { getAllIceCreamsThunk } from "../../store/icecream"

const HomePage = () => {

    const dispatch = useDispatch()

    const sessionUser = useSelector(state => state.session.user);

    // const iceCreamList = useSelector(state => state.)

    useEffect(() => {
        dispatch(getAllIceCreamsThunk())
    }, [dispatch])


    return (
        <h1>IceCream</h1>
    )
}

export default HomePage
