const GET_REVIEWS = "reviews/all";
const ADD_REVIEW = "reviews/add";
const EDIT_REVIEW = "reviews/edit";

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

// export const updateProfile = (profile) => async (dispatch) => {
//   const res = await fetch(`/api/users/${profile.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(profile),
//   });
//   const updatedProfile = await res.json();
//   dispatch(update(updatedProfile))
//   return updatedProfile;
// }


const initialState = {};

// reducer
const reviewReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_REVIEWS:
      action.reviews.reviews.forEach(review => (newState[review.id] = review));
      return newState;

    case ADD_REVIEW:
      newState[action.review.id] = action.review;
      return newState;

    case EDIT_REVIEW:
      newState[action.review.id] = action.review;
      return newState;

    default:
      return state;
  }
};

export default reviewReducer;
