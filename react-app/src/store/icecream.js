const GET_ALL_ICECREAMS = "icecreams/all";
const ADD_ICECREAM = "icecream/add";
const EDIT_ICECREAM = "icecream/edit";
const DELETE_ICECREAM = "icecream/delete";

const getAllIceCreams = iceCreams => {
  return {
    type: GET_ALL_ICECREAMS,
    iceCreams,
  };
};

const addIceCream = iceCream => {
  return {
    type: ADD_ICECREAM,
    iceCream,
  };
};

const editIceCream = iceCream => {
  return {
    type: EDIT_ICECREAM,
    iceCream,
  };
};

const deleteIceCream = id => {
  return {
    type: DELETE_ICECREAM,
    id,
  };
};

export const getAllIceCreamsThunk = () => async dispatch => {
  const res = await fetch(`/api/iceCreams/all`);
  const data = await res.json();
  dispatch(getAllIceCreams(data));
  return data;
};

export const addIceCreamThunk = iceCream => async dispatch => {
  const res = await fetch(`/api/iceCreams/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(iceCream),
  });
  console.log(res);
  const data = await res.json();
  dispatch(addIceCream(data));
};

export const editIceCreamThunk = iceCream => async dispatch => {
  console.log("INSIDE OF THUNK");
  const res = await fetch(`/api/iceCreams/edit`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(iceCream),
  });

  const data = await res.json();
  dispatch(editIceCream(data));
};

export const deleteIceCreamThunk = id => async dispatch => {
  const res = await fetch(`api/iceCreams/delete/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    const data = await res.json();
    // console.log("ID", id)
    // console.log("DATA", data)
    dispatch(deleteIceCream(id));
    return data;
  }
};

const initialState = {};

const iceCreamReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_ALL_ICECREAMS:
      newState = {};
      action.iceCreams.iceCreams.forEach(
        iceCream => (newState[iceCream.id] = iceCream)
      );
      return newState;

    case ADD_ICECREAM:
      newState[action.iceCream.id] = action.iceCream;
      return newState;

    case EDIT_ICECREAM:
      newState[action.iceCream.id] = action.iceCream;
      return newState;

    case DELETE_ICECREAM:
      console.log("ACTION", action);
      console.log("NEW STATE", newState);
      delete newState[action.id];
      return newState;

    default:
      return state;
  }
};

export default iceCreamReducer;
