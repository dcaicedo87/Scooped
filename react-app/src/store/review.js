const GET_REVIEWS = "reviews/all";
const ADD_REVIEW = "reviews/add";
const EDIT_REVIEW = "reviews/edit";
const DELETE_REVIEW = "review/delete";


// action creator Reviews
const getReviews = reviews => {
  return {
    type: GET_REVIEWS,
    reviews,
  };
};

const addReview = review => {
  return {
    type: ADD_REVIEW,
    review,
  };
};

const editReview = review => {
  return {
    type: EDIT_REVIEW,
    review
  };
};

const deleteReview = id => {
  return {
    type: DELETE_REVIEW,
    id
  }
}


// thunk for Reviews
export const getReviewsThunk = iceCreamId => async dispatch => {
  const res = await fetch(`/api/reviews/${iceCreamId}`);
  if (res.ok) {
    const data = await res.json();
    dispatch(getReviews(data));
    return data;
  }
};

export const addReviewThunk = review => async dispatch => {
  const { ice_cream_id } = review;
  const res = await fetch(`/api/reviews/${ice_cream_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(addReview(data));
    return data;
  }
};

export const editReviewThunk = review => async (dispatch) => {
  const res = await fetch(`/api/reviews/edit`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  });
  console.log("AFTER EDIT THUNK")
  const updateReview = await res.json();
  dispatch(editReview(updateReview))
}

// delete review thunk
export const deleteReviewThunk = id => async dispatch => {
  const res = await fetch(`/api/reviews/delete/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(deleteReview(id));
    return data;
  }
}



const initialState = {};

// reducer
const reviewReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_REVIEWS:
      newState = {};
      action.reviews.reviews.forEach(review => (newState[review.id] = review));
      return newState;

    case ADD_REVIEW:
      newState[action.review.id] = action.review;
      return newState;
      
    case EDIT_REVIEW:
      newState[action.review.id] = action.review;
      return newState;
      
    case DELETE_REVIEW:
      delete newState[action.id];
      return newState;

    default:
      return state;
  }
};

export default reviewReducer;
