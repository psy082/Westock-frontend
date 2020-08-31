import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import MyAccount from "./Pages/Account/MyAccount/MyAccount";
import ItemDetail from "./Pages/ItemDetail/ItemDetail";
import ItemList from "./Pages/ItemList/ItemList";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/account" component={MyAccount} />
          <Route exact path="/:itemName" component={ItemDetail} />
          <Route exact path="/air-jordans/:itemName" component={ItemList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
