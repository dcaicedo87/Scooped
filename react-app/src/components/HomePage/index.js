import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

import { getAllIceCreamsThunk } from "../../store/icecream"
import AddIceCreamModal from '../Modal';
import "./homepage.css"

const HomePage = () => {

    const dispatch = useDispatch()

    const sessionUser = useSelector(state => state.session.user);
    const iceCreamArray = useSelector(state => state.iceCream)
    const thisIceCream = iceCreamArray[0]


    useEffect(() => {
        dispatch(getAllIceCreamsThunk())
    }, [dispatch])


    return (
        <>
            <h1>IceCreams</h1>
            <AddIceCreamModal />
            <div>
                {iceCreamArray.length > 0 && iceCreamArray.map(iceCream => (
                    <div className="iceCream-div">
                        <img src={iceCream.icecream_pic_url} className="iceCream-pic"/>
                        <li>{iceCream.flavor_name}</li>
                    </div>
                ))}
            </div>
        </>
    )
}

export default HomePage
