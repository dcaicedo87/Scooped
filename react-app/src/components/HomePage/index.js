import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllIceCreamsThunk,
  deleteIceCreamThunk,
} from "../../store/icecream";

import { getAllShopsThunk } from "../../store/shop";

import AverageRating from "./avgRating";
import AddIceCreamModal from "../ModalAdd";
import EditIceCreamModal from "../ModalEdit";

import "./homepage.css";

import iceCreamPic from "../../html/images/iceCream.png";
import shopPic from "../../html/images/shop.png";

const HomePage = () => {
  const dispatch = useDispatch();

  // const [editButton, setEditButton] = useState(false)

  const [iceCreamMenu, setIceCreamMenu] = useState(true);

  const sessionUser = useSelector(state => state.session.user);
  const iceCreamArray = useSelector(state =>
    Object.values(state.iceCream).reverse()
  );
  const shopArray = useSelector(state => Object.values(state.shop).reverse());
  const shopObj = useSelector(state => state.shop)

  const deleteIceCream = id => {
    dispatch(deleteIceCreamThunk(id));
  };

  useEffect(() => {
    dispatch(getAllIceCreamsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllShopsThunk());
  }, [dispatch]);

  return (
    <div className="homepage-main">
      <div className="upper-content">
        <div className="homepage-menu-buttons">
          <button onClick={e => setIceCreamMenu(true)}>
            <img
              src={iceCreamPic}
              alt="iceCream btn"
              className="homepage-menu-image"
            />
            <p className="homepage-menu-text">IceCream</p>
          </button>
          <button onClick={e => setIceCreamMenu(false)}>
            <img src={shopPic} alt="shop btn" className="homepage-menu-image" />
            <p className="homepage-menu-text">Shops</p>
          </button>
        </div>
        <AddIceCreamModal />
      </div>
      {iceCreamMenu && (
        <div>
          <p className="homepage-menu-title">IceCreams</p>
          <div className="main-content">
            {iceCreamArray.length > 0 &&
              iceCreamArray.map(iceCream => (
                <div className="iceCream-div" key={iceCream.id}>
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
                    <div>
                      <li className="ice-cream-name-card" key={iceCream.id + "A"}>{iceCream.flavor_name}</li>
                      <li className="shop-name-card">
                        <AverageRating id={iceCream.id}/>
                      </li>
                      {shopArray.length > 0 &&
                        <li className="shop-name-card" key={iceCream.id + "Z"}>
                          {shopObj[iceCream.shop_id].shop_name}</li>
                      }
                    </div>
                    {iceCream.user_id === sessionUser.id && (
                      <div className="little-button">
                        <EditIceCreamModal
                          iceCream={iceCream}
                          key={iceCream.id + "B"}
                        />
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
      )}
      {!iceCreamMenu && (
        <div>
          <p className="homepage-menu-title">Shops</p>
          <div className="main-content">
            {shopArray.length > 0 &&
              shopArray.map(shop => (
                <div className="iceCream-div" key={shop.id}>
                  <div className="image-container">
                    <NavLink
                      key={shop.id}
                      to={`/shop/${shop.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <img

                        key={shop.id + ""}
                        src={shop.shop_pic_url}
                        alt="shop pic"
                        className="shop-pic"
                      />
                    </NavLink>
                  </div>
                  <div className="info-container-shops">
                    <li key={shop.id + "C"}>{shop.shop_name}</li>
                    <p className="info-paragraph-shops">
                      {shop.city}, {shop.state}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
