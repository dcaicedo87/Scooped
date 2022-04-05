import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

import { getAllIceCreamsThunk } from "../../store/icecream"

import AddIceCreamModal from '../ModalAdd';
import EditIceCreamModal from '../ModalEdit';

import "./homepage.css"

const HomePage = () => {

    const dispatch = useDispatch()

    const [editButton, setEditButton] = useState(false)

    const sessionUser = useSelector(state => state.session.user);
    const iceCreamArray = useSelector(state => Object.values(state.iceCream).reverse())


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
                        {iceCream.user_id == sessionUser.id &&
                            <EditIceCreamModal iceCream={iceCream}/>
                        }
                    </div>
                ))}
            </div>
        </>
    )
}

export default HomePage
