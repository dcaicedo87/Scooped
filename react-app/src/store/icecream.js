const GET_ALL_ICECREAMS = "icecreams/all"
const ADD_ICECREAM = "icecream/add";


const getAllIceCreams = (iceCreams) => {
    return {
        type: GET_ALL_ICECREAMS,
        iceCreams
    }
}

const addIceCream = (iceCream) => {
    return {
        type: ADD_ICECREAM,
        iceCream
    }
}

export const getAllIceCreamsThunk = () => async (dispatch) => {

    const res = await fetch(`/api/iceCreams/all`);
    const data = await res.json()
    dispatch(getAllIceCreams(data))
    return data
}

export const addIceCreamThunk = (iceCream) => async (dispatch) => {
    const res = await fetch(`/api/iceCreams/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(iceCream)
    });
    console.log(res)
    const data = await res.json();
    dispatch(addIceCream(data));
}

const initialState = {}

const iceCreamReducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case GET_ALL_ICECREAMS:
            return action.iceCreams.iceCreams;

        case ADD_ICECREAM:
            newState[action.iceCream.id] = action.iceCream
            return newState


        default: return state;

    }
}

export default iceCreamReducer
