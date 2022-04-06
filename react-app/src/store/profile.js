

//profile switch cases
const UPDATE = "profiles/update"

//actions
const update = (profile) => ({
    type: UPDATE,
    profile,
});

//THUNKS
export const updateProfile = (profile) => async (dispatch) => {
    const res = await fetch(`/api/users/${profile.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
    });
    const updatedProfile = await res.json();
    dispatch(update(updatedProfile))
    return updatedProfile;
}
