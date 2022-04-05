import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIceCreamThunk } from "../../store/icecream";
import { useHistory } from 'react-router-dom';


function AddIceCreamForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const history = useHistory();


    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [iceCreamUrl, setIceCreamUrl] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addIceCreamThunk({
            flavor_name: name,
            category,
            icecream_pic_url: iceCreamUrl,
            description,
            user_id: sessionUser.id
        }))
            .catch(async (res) => {
                return
            })
        history.push('/');

    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                IceCream Name
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required />
            </label>
            <label>
                category
                <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    required
                >
                    <option value="dairy">Dairy</option>
                    <option value="vegan">Vegan</option>
                    <option value="gelato">Gelato</option>
                    <option value="super-market">Super Market</option>
                </select>
            </label>
            <label>
                Picture
                <input
                    type="text"
                    value={iceCreamUrl}
                    onChange={e => setIceCreamUrl(e.target.value)}
                    required />
            </label>
            <label>
                Description
                <input
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required />
            </label>
        </form>
    )
}

export default AddIceCreamForm
