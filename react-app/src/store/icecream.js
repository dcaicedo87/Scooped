

const GET_ALL_ICECREAMS = "icecreams/all"


const getAllIceCreams = (iceCreams) => {
    return {
        type: GET_ALL_ICECREAMS,
        iceCreams
    }
}

export const getAllIceCreamsThunk = () => async (dispatch) => {

    const res = await fetch(`/api/iceCreams/all`);
    const data = await res.json()
    dispatch(getAllIceCreams(data))

    return data
}


const initialState = {}

const iceCreamReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case GET_ALL_ICECREAMS: {
            newState = {...state}
            action.iceCreams.forEach(iceCream => {
                newState[iceCream.id] = iceCream
            });
            return newState;
        }
    }
}

export default iceCreamReducer
