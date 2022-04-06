// import React, { useState, useEffect } from 'react';
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllIceCreamsThunk,
  deleteIceCreamThunk,
} from "../../store/icecream";

import AddIceCreamModal from "../ModalAdd";
import EditIceCreamModal from "../ModalEdit";

import "./homepage.css";

const HomePage = () => {
  const dispatch = useDispatch();

  // const [editButton, setEditButton] = useState(false)

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
        <h1>IceCreams</h1>
        <AddIceCreamModal />
      </div>
      <div className="main-content">
        {iceCreamArray.length > 0 &&
          iceCreamArray.map(iceCream => (
            <NavLink
              to={`/iceCream/${iceCream.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="iceCream-div">
                <div className="image-container">
                  <img
                    src={iceCream.icecream_pic_url}
                    alt="icecream pic"
                    className="iceCream-pic"
                  />
                </div>
                <div className="info-container">
                  <li>{iceCream.flavor_name}</li>
                  {iceCream.user_id === sessionUser.id && (
                    <div className="little-button">
                      <EditIceCreamModal iceCream={iceCream} />
                      <button
                        className="delete-button"
                        onClick={() => deleteIceCream(iceCream.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
