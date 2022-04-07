const GET_ALL_SHOPS = "shops/all";

const getAllShops = shops => {
    return {
        type: GET_ALL_SHOPS,
        shops,
    };
};


export const getAllShopsThunk = () => async dispatch => {
    const res = await fetch(`/api/shops/all`);
    console.log("INSIDE THUNK*********", res)
    const data = await res.json();
    dispatch(getAllShops(data));
    return data;
};

const initialState = {};

const shopReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case GET_ALL_SHOPS:
            newState = {};
            action.shops.shops.forEach(
                shop => (newState[shop.id] = shop)
            );
            return newState;
        default:
            return state;

    }
}

export default shopReducer
