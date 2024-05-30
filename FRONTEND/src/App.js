import React, {  useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom"; 
import {
  AllUsers,
  AddUser,
  Chart,
  Home,
  ShowUser,
  EditUser,
  NotFound
} from "./components";
import AppRoute from './AppRoute';
import Auth from "./Auth";
function App() {
  useEffect(() => {
    Auth.init()
  }, []);

  return (
   <div>
      <Router>
        <Switch>
          <AppRoute
            path='/ChartUsers'
            exact
            component={Chart}
            can={Auth.auth}
            redirect='/'
          />
          <AppRoute
            path='/AllUsers'
            exact
            component={AllUsers}
            can={Auth.auth}
            redirect='/'
          />
          <AppRoute
            path='/CreateUser'
            exact
            component={AddUser}
            can={Auth.auth}
            redirect='/'
          />
          <AppRoute
            path='/EditUser/:id'
            exact
            component={EditUser}
            can={Auth.auth}
            redirect='/'
          />
          <AppRoute
            path='/ShowUser/:id'
            exact
            component={ShowUser}
            can={Auth.auth}
            redirect='/'
          />
          <AppRoute
            path='/'
            component={Home}
            can={Auth.guest}
            redirect='/AllUsers'
          />
          <AppRoute path='*' component={NotFound} />
        </Switch>
      </Router>
   </div>
  );
}

export default App;
