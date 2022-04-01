import React, { useState, useEffect }  from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import axios from 'axios';
import Home from './components/home';
import Form from './components/form';
import formSchema from "./validation/FormSchema";
import * as yup from 'yup';

const initialFormValues ={
    name: '',
    size: false,
    toppings: false,
    special: '',
}
const initialFormError ={
  name: '',
  size: false,
  toppings: false,
  special: '',
}
const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormError);
  const [orders, setOrders] = useState([]);


  const onSubmit = () => {
    axios.post('https://reqres.in/api/orders', formValues) // posts values we typed to this api link since it will clear after submit
      .then(res => {
        setOrders([res.data, ...orders]); // make sure to test and console log to see what response looks like 
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues)) //clears blanks
  }

  const onChange = (name, value) => {
    validate(name,value);
    setFormValues({...formValues, [name]:value});
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name) //for each key
    .validate(value) // check the value put in the key with the given requirements
    .then(() => setFormErrors({...formErrors, [name]:''})) // formErrors will be cleared for that specific value
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]})) // only one error per value, errors will then be filled what we typed in schema for the specific value
  }

  return (
    <div className="App">
      <nav className="nav-container">
        <h1 className="store-header">LAMBDA EATS</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pizza" id="order-pizza">Order</Link>
        </div>
      </nav>
      <Switch>
       
        <Route path="/pizza">
          <Form 
            error = {formErrors}
            values={formValues}
            order={orders}
            change={onChange}
            submit={onSubmit}
          />
        </Route>
        <Route  path="/">
          <Home />
        </Route>
      </Switch>     
    </div>
  );
};

export default App;
