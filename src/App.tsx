import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import Login from './componets/login';
import ServiceAComponent from './componets/login';
import PrivateRoute from './componets/privateRoute';
import './App.css'

function App() {
  

  return (
    <>
      <h2>Apis</h2>

      <BrowserRouter>
      <Router>
        <Route path="/login" Component={Login} />
        <PrivateRoute path="/service-a" component={ServiceAComponent} />
      </Router>
    </BrowserRouter>
    </>
  )
}

export default App
