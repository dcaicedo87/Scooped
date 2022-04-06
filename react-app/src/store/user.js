// constants
const GET_USERS = 'users/GET'

//actions
const getUsers = (users) => {
    return {
        type: GET_USERS,
        users
    }
};

// THUNK
export const getUsersThunk = () => async dispatch => {
    const res = await fetch(`/api/users/all`);
    const data = await res.json();
    dispatch(getUsers(data));
    return data
}

//Reducer
const initialState = {};

const userReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case GET_USERS:
            console.log(`************ in Action`, action)
            newState = {};
            action.users.users.forEach(
                user => (newState[user.id] = user)
            );
            return newState;
        default:
            return state;
    }
}

export default userReducer;
