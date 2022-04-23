import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
// Firebase sedang dalam pengembangan
// import SignUpForm from "./components/SignUpForm";
import SpotifyAuth from "./pages/SpotifyAuth";

const App = () => { 
  return (
  <Router>
    <NavigationBar />
    <Switch>
      <Route path={ROUTES.HOME} component={Hero}/>
    </Switch>
    <SpotifyAuth />
  </Router>

  );
};

export default App;