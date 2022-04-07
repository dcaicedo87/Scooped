
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"


import {
  getAllIceCreamsThunk,
  deleteIceCreamThunk,
} from "../../store/icecream";

import AddIceCreamModal from "../ModalAdd";
import EditIceCreamModal from "../ModalEdit";

import "./homepage.css";

import iceCreamPic from '../../html/images/iceCream.png'

const HomePage = () => {
  const dispatch = useDispatch();

  // const [editButton, setEditButton] = useState(false)

  const [iceCreamMenu, setIceCreamMenu] = useState(true)

  const sessionUser = useSelector(state => state.session.user);
  const iceCreamArray = useSelector(state =>
    Object.values(state.iceCream).reverse()
  );

  const deleteIceCream = id => {
    dispatch(deleteIceCreamThunk(id));
  };

  useEffect(() => {
    dispatch(getAllIceCreamsThunk());
  }, [dispatch]);

  return (
    <div className="homepage-main">
      <div className="upper-content">
        <div className='homepage-menu-buttons'>
          <button onClick={e => setIceCreamMenu(true)}>
            <img src={iceCreamPic} alt='iceCream picture' className='homepage-menu-image'/>
            <p className='homepage-menu-text'>IceCreams</p>
          </button>
          <button onClick={e => setIceCreamMenu(false)}>
            <img src={iceCreamPic} alt='shop picture' className='homepage-menu-image'/>
            <p className='homepage-menu-text'>Shops</p>
          </button>
        </div>
        <AddIceCreamModal />
      </div>
      {iceCreamMenu &&
        <div>
          <p className='homepage-menu-title'>IceCreams</p>
          <div className="main-content">
            {iceCreamArray.length > 0 &&
              iceCreamArray.map(iceCream => (
                <div className="iceCream-div">
                  <div className="image-container">
                    <NavLink
                      key={iceCream.id}
                      to={`/iceCream/${iceCream.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <img
                        key={iceCream.id + ""}
                        src={iceCream.icecream_pic_url}
                        alt="icecream pic"
                        className="iceCream-pic"
                      />
                    </NavLink>
                  </div>
                  <div className="info-container">
                    <li key={iceCream.id + "A"}>{iceCream.flavor_name}</li>
                    {iceCream.user_id === sessionUser.id && (
                      <div className="little-button">
                        <EditIceCreamModal iceCream={iceCream} key={iceCream.id + "B"} />
                        <button
                          key={iceCream.id + "L"}
                          className="delete-button"
                          onClick={() => deleteIceCream(iceCream.id)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      }
      {!iceCreamMenu &&
        <h2>Shops will be here!</h2>
      }
    </div>
  );
};

export default HomePage;
