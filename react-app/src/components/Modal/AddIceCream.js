import React, { useState } from "react";
import { useDispatch } from "react-redux";

function AddIceCreamForm () {
    return (
        <form>
            <label>
            Flavor or Name
            <input
            type="text"
            required
            />
            </label>
        </form>
    )
}

export default AddIceCreamForm
