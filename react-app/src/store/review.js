const GET_REVIEWS = 'reviews/all';

// action creator Reviews
const getReviews = (reviews) => {
    return {
        type: GET_REVIEWS,
        reviews
    };
};



// thunk for Reviews
export const getReviewsThunk = (iceCreamId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${iceCreamId}`);
    if (res.ok) {
        const data = await res.json()
        dispatch(getReviews(data))
        return data
    }
};

const initialState = {}


// reducer
const reviewReducer = (state = initialState, action) => {
    //let newState = { ...state }
    switch (action.type) {
        case GET_REVIEWS:
            const newState = {}
            action.reviews.reviews.forEach(review => (
                newState[review.id] = review
            ));
            return newState;

        default:
            return state;
    }
}

export default reviewReducer
