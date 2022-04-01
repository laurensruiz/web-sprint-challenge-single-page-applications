import React from 'react';
import toppings from "../data/toppings"


const Form = (props) => {

    const handleChange = event => {
        const {name, value, checked, type} = event.target;
        const newVal = type === 'checkbox' ? checked : value;
        props.change(name, newVal); // from app.js onchange (look at what you set for props)
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit(); // from app.js
    }

    return(
        <form id="pizza-form" onSubmit={handleSubmit}>
            <label> Name:
            <input
                placeholder="Enter name here"
                value={props.values.name} 
                name="name"
                id="name-input"
                onChange={handleChange}
            />
            </label>
            <label> Pizza Size: 
            <select
                value={props.values.size}
                name="size"
                id="size-dropdown"
                onChange={handleChange}
            >
                <option value=""> Select Size </option>
                <option value="Small"> Small </option>
                <option value="Medium"> Medium </option>
                <option value="Large"> Large </option>
            </select>
            </label>
            <div id="pizza-toppings">
            {toppings.map(topping => {
                return <label> {topping}:
                            <input
                                type="checkbox"
                                name="toppings"
                                checked={props.values.topping}
                                onChange={handleChange}
                            />
                            </label>
                            })
            }
            </div>
            <input type="submit" value="Create Pizza" />
        </form>

    )
}

export default Form;