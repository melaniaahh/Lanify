import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import './App.css';
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import SignUpForm from './components/SignUpForm';
import WebApp from './pages/WebApp/WebApp';

const App = () => {
  return (
  <Router>
    <NavigationBar />

    <Switch>
      <Route path={ROUTES.SIGN_UP} component={SignUpForm}/>
      <Route path={ROUTES.HOME} component={Hero}/>
      <WebApp />
    </Switch>
  </Router>
  );
};

export default App;