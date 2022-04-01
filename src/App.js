import React, { useState, useEffect }  from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import axios from 'axios';
import Home from './components/home';
import Form from './components/form';
import Confirmation from './components/confirmation';

const initialFormValues ={
    name: '',
    size: '',
    topping1: '',
    topping2: '',
    special: '',

}
const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
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
    setFormValues({...formValues, [name]:value});
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
        {/* <Route path="/pizza/confirmation">
          <Confirmation  />
        </Route> */}
        <Route path="/pizza">
          <Form 
            values={formValues}
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
