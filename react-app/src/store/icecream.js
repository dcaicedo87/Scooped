

const GET_ALL_ICECREAMS = "icecreams/all"


const getAllIceCreams = (iceCreams) => {
    return {
        type: GET_ALL_ICECREAMS,
        iceCreams
    }
}

export const getAllIceCreamsThunk = () => async (dispatch) => {

    const res = await fetch(`/api/iceCreams/all`);
    console.log("GETING HERE")
    const data = await res.json()
    dispatch(getAllIceCreams(data))

    return data
}


const initialState = {}

const iceCreamReducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case GET_ALL_ICECREAMS: {
            return action.iceCreams.iceCreams
        }

        default: return state;
    }
}

export default iceCreamReducer
