import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editIceCreamThunk } from "../../store/icecream";
import { useHistory } from 'react-router-dom';


function EditIceCreamForm({iceCream}) {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const history = useHistory();


    const [name, setName] = useState(iceCream.flavor_name);
    const [category, setCategory] = useState(iceCream.category);
    const [iceCreamUrl, setIceCreamUrl] = useState(iceCream.icecream_pic_url);
    const [description, setDescription] = useState(iceCream.description);

    const handleSubmit = (e) => {
        e.preventDefault();
        let iceCreamy = {
            id: iceCream.id,
            flavor_name: name,
            category,
            icecream_pic_url: iceCreamUrl,
            description,
            user_id: sessionUser.id
        }
        dispatch(editIceCreamThunk(iceCreamy))
        window.location.reload(false)
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
                Category
                <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    required
                >
                    <option value="dairy">Dairy</option>
                    <option value="vegan">Vegan</option>
                    <option value="gelato">Gelato</option>
                    <option value="super-market">SuperMarket</option>
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
            <button type="submit">Submit</button>
        </form>
    )
}

export default EditIceCreamForm
