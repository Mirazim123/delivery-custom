import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../screens/dashboard/dashboard";
import Login from "../screens/login/Login";
import Shop  from "../screens/shop/shop" 
import Email from  "../screens/email/email"

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/login" exact component={Login} />
  
         <Route path="/shop" component={Shop} />
         <Route path="/email" component={Email} />
      </Switch>
    </BrowserRouter>
  );
}
