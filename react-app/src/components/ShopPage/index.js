import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllIceCreamsThunk } from "../../store/icecream";
import { getAllShopsThunk } from "../../store/shop";

import "./ShopPage.css";
import { NavLink } from "react-router-dom";

const ShopPage = () => {
  const dispatch = useDispatch();
  const id = useParams().shopId;

  const iceCreamArrayVals = useSelector(state =>
    Object.values(state.iceCream).reverse()
  );
  const shopObj = useSelector(state => state.shop);

  const currentShop = shopObj[id];

  useEffect(() => {
    dispatch(getAllShopsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllIceCreamsThunk());
  }, [dispatch]);

  const iceCreamArray = iceCreamArrayVals.filter(
    iceCream => iceCream.shop_id === +id
  );

  return (
    <div className="body-shopPage">
      {currentShop && (
        <div className="main-content-shopPage">
          <div className="big-image-container-a">
            <img
              className="big-shop-image"
              src={currentShop.shop_pic_url}
              alt="Shop"
              key={currentShop.id}
            />
          </div>
          <div>
            <h2 className="shop-name-title">{currentShop.shop_name}</h2>
            <p className="shop-address">
              {currentShop.street_number} {currentShop.street_name},{" "}
              {currentShop.city}, {currentShop.state}, {currentShop.postal_code}
            </p>
          </div>
          {iceCreamArray?.map(iceCream => (
            <div key={iceCream.id} className="review_card_shop">
              <NavLink to={`/iceCream/${iceCream.id}`}>
                <img
                  alt="iceCream"
                  src={iceCream.icecream_pic_url}
                  className="icecream-img-shop"
                />
              </NavLink>
              <div className="shop-grid">
                <h3 className="shop-h3">{iceCream.flavor_name}</h3>
                <div className="shop_review_content">
                  <p>{iceCream.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
