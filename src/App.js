import React, { useState, useEffect }  from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import axios from 'axios';
import Home from './components/home';
import Form from './components/form';
import Confirmation from './components/confirmation';

const App = () => {
  const [members, setMembers] = useState([]); // this is what is submited in values
  const [values, setValues] = useState({name:'', email:'', role:''}); //this is the input


  const onSubmit = () => {
    setMembers([values, ...members]) // add values to members array watchout for those brackets!
    setValues({name:'', email:'', role:''}); //resets the input so what is typed disappears, good UI!
  }

  const onChange = (name, value) => {
    setValues({...values, [name]: value}) //spread out those keys in values, [name] = parameter name which indicates the property (name, email role since we ...) need brackets, value= value being input
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
            values={values}
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
