import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import MyAccount from "./Pages/Account/MyAccount/MyAccount";
import Login from "./Pages/Account/Login/Login";
import ItemDetail from "./Pages/ItemDetail/ItemDetail";
import ItemList from "./Pages/ItemList/ItemList";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/account" component={MyAccount} />
          <Route exact path="/account/login" component={Login} />
          <Route exact path="/sneakers" component={ItemList} />
          <Route exact path="/:itemName" component={ItemDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
