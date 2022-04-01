import React from 'react';
const Form = (props) => {

    const handleChange = event => {
        /*
        const name =evt.target.name
        const value =evt.target.value
        */
        const {name, value} = event.target;
        props.change(name, value); // from app.js onchange (look at what you set for props)
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit(); // from app.js
    }

    return(
        <form onSubmit={handleSubmit}>
            <label> Name:
            <input
                placeholder="Enter name here"
                value={props.values.name} 
                name="name"
                onChange={handleChange}
            />
            </label>
            <label> Email:
            <input
                placeholder="Enter email here"
                value={props.values.email}
                name="email"
                onChange={handleChange}
            />
            </label>
            <label> Role: 
            <select
                value={props.values.role}
                name="role"
                onChange={handleChange}
            >
                <option value=""> Select Role </option>
                <option value="Student"> Student </option>
                <option value="Instructor"> Instructor </option>
                <option value="Alumni"> Alumni </option>
            </select>
            </label>
            <input type="submit" value="Create Team" />
        </form>

    )
}

export default Form;