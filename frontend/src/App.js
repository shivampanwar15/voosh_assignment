
import React from 'react';
import Home from './screens/home.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/login.jsx';
import Signup from './screens/signup.jsx';
import Order from './screens/order.jsx';
import MyOrder from './screens/myorders.jsx';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path= "/order" element={ <Order />}/>
        <Route exact path= "/myorders" element={ <MyOrder />}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
