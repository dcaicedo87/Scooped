const GET_ALL_SHOPS = "shops/all";
const GET_JOIN = "shops/join";

const getAllShops = shops => {
    return {
        type: GET_ALL_SHOPS,
        shops,
    };
};

const getJoin = joints => {
    return {
        type: GET_JOIN,
        joints
    }
}


export const getAllShopsThunk = () => async dispatch => {
    const res = await fetch(`/api/shops/all`);
    const data = await res.json();
    dispatch(getAllShops(data));
    return data;
};

export const getJoinThunk = (id) => async dispatch => {
    const res = await fetch(`/api/shops/join/${id}`);
    const data = await res.json();
    dispatch(getJoin(data));
    return data;

}


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
        case GET_JOIN:
            newState = {};
            action.joints.iceCreams.forEach(
                iceCream => (newState[iceCream.id] = iceCream)
            );
            return newState;

        default:
            return state;

    }
}

export default shopReducer
