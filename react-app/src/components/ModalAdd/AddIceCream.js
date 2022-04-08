import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIceCreamThunk } from "../../store/icecream";
import { useHistory } from "react-router-dom";

import { getAllShopsThunk } from "../../store/shop";

function AddIceCreamForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector(state => state.session.user);
  const shopList = Object.values(useSelector(state => state.shop));

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Dairy");
  const [iceCreamUrl, setIceCreamUrl] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const [shop, setShop] = useState(shopList[0].id); // TODO: insert shop data

  const handleSubmit = e => {
    e.preventDefault();
    let iceCream = {
      flavor_name: name,
      category,
      icecream_pic_url: iceCreamUrl,
      description,
      user_id: sessionUser.id,
      shop_id: shop,
    };

    //error validation
    setErrors([]);

    const newErrors = [];

    if (iceCream.flavor_name.length < 4) {
      newErrors.push("IceCream's name must be 4 characters or more");
    }

    if (iceCream.description.length < 4) {
      newErrors.push("IceCream's description must be 4 characters or more");
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    dispatch(addIceCreamThunk(iceCream));
    window.location.reload(false);
    history.push("/");
  };

  useEffect(() => {
    dispatch(getAllShopsThunk());
  }, [dispatch]);

  return (
    <div className="modal-container">
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
          <select value={shop} onChange={e => setShop(e.target.value)} required>
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
          Add IceCream
        </button>
      </form>
    </div>
  );
}

export default AddIceCreamForm;
