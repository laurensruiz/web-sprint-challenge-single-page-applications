import React from 'react';
import toppings from "../data/toppings"
import { Link } from 'react-router-dom';


const Form = (props) => {
    const handleChange = event => {
        const {name, value, checked, type} = event.target;
        const newVal = type === 'checkbox' ? checked : value;
        props.change(name, newVal); // from app.js onchange (look at what you set for props)
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit(); 
    }
    console.log(props.order)
    return(
        //<div>
        <div>
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
                    <label> Toppings:
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
                    </label>
                </div>
                <div>
                <label> Special Instructions:
                <input
                    placeholder="Enter any special Instructions"
                    value={props.values.special} 
                    name="special"
                    id="special-text"
                    onChange={handleChange}
                />
                </label> 
                </div>
                <input id="order-button" type="submit" value="Create Pizza" />
            </form>
        {/* </div>
        {props.order.map(order =>(
            <div>
                <p>{order.name}, {order.size}, {order.toppings}, {order.special}</p>
            </div>
        ))} */}
        </div>
        
    )
}

export default Form;