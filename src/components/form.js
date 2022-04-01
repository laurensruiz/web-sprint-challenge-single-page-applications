import React from 'react';
import toppings from "../data/toppings"
import { useHistory } from "react-router-dom";



const Form = (props) => {
    const history = useHistory();

    const handleChange = event => {
        const {name, value, checked, type} = event.target;
        const newVal = type === 'checkbox' ? checked : value;
        props.change(name, newVal); // from app.js onchange (look at what you set for props)
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit(); 
    }
  
    const routeToConfirm = () => {
        history.push("/pizza/confirmation");
      }
    return(
        <div>
            <p>{props.error.name}</p>
            <p>{props.error.size}</p>
            <p>{props.error.toppings}</p>
            <p>{props.error.special}</p>
        <div>
            <form id="pizza-form" onSubmit={handleSubmit}>
                <label> Name:
                <input
                    required
                    placeholder="Enter name here"
                    value={props.values.name} 
                    name="name"
                    id="name-input"
                    onChange={handleChange}
                />
                </label>
                <label> Pizza Size: 
                <select
                    required
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
                <button 
                    onClick={routeToConfirm}
                    id="order-button" 
                    type="button">
                    Create Pizza
                </button>
            </form>
        </div>
        {/* {props.order.map(order =>(
            <div>
                <p>{order.name} please wait for email confirmation!</p>
            </div>
        ))} */}
        </div>
        
    )
}

export default Form;