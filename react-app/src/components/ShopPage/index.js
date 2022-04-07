import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllIceCreamsThunk } from "../../store/icecream";
import { getAllShopsThunk, getJoinThunk } from '../../store/shop'

const ShopPage = () => {
    const dispatch = useDispatch();
    const id = useParams().shopId;

    const iceCreamArray = useSelector(state =>
        Object.values(state.iceCream).reverse()
    );
    const shopObj = useSelector(state =>
        (state.shop)
    );

    const currentShop = shopObj[id];
    console.log(currentShop, "***********************")
    useEffect(() => {
        dispatch(getAllIceCreamsThunk());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAllShopsThunk());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getJoinThunk(id));
    }, [dispatch]);

    //iceCreamArray.filter(ice)

    return (
        <div>
            {currentShop &&
                <h2>{currentShop.shop_name}</h2>
            }
        </div>
    )
}

export default ShopPage
