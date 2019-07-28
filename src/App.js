import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import { toast } from 'react-toastify'

//Import components
import Login from "./components/login/login"
import Feed from "./components/feed"
import Navbar from "./components/common/navbar"
import DetailPage from './components/feedDetail'
import {noMatch} from './components/404'
import 'react-toastify/dist/ReactToastify.css'

//Toastify
toast.configure()
export const notify = () => toast("Sample")

//PrivateRouter
let token;
const PrivateRoute = ({ component: Component, ...rest }) => {
  token = localStorage.getItem('token') ? true : false
  return (
    <Route
      {...rest}
      render={props => {
        return token ? (
          <div>
            <Navbar />
            {notify}
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/feed" component={Feed} />
        <PrivateRoute exact path="/feed-details/:id" component={DetailPage} />
        <PrivateRoute component={noMatch}/>
      </Switch>
    </Router>
  );
}

export default App;
