import React, { useEffect, useState } from "react";
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
    const [errors, setErrors] = useState([])

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

        //error validation
        setErrors([])

        const newErrors = [];

        if (iceCreamy.flavor_name.length < 4) {
            newErrors.push("IceCream's name must be 4 characters or more")
        }

        if (iceCreamy.description.length < 4) {
            newErrors.push("IceCream's description must be 4 characters or more")
        }

        if (newErrors.length > 0) {
            setErrors(newErrors);
            return;
        }

        dispatch(editIceCreamThunk(iceCreamy))
        window.location.reload(false)
        history.push('/');
    }

  useEffect(() => {
    dispatch(getAllShopsThunk());
  }, [dispatch]);

  return (
    <div className="moda-container">
      <div>
        <ul className="post-icecream-errors">
          {errors.map(err => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      </div>
      <form className="icecream-form" onSubmit={handleSubmit}>
        <label>
          IceCream Name
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <label className="category-icecream">
          Shop
          <select
            className="icecream-select"
            value={shop}
            onChange={e => setShop(e.target.value)}
            required
          >
            {shopList.length > 0 &&
              shopList.map(shop => (
                <option key={shop.id} value={shop.id}>
                  {shop.shop_name}
                </option>
              ))}
          </select>
        </label>
        <label className="category-icecream">
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
            required
          />
        </label>
        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </label>
        <button className="big-button" id="icecream-add-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditIceCreamForm;
