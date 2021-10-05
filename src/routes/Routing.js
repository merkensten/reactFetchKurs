import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecipeView } from '../view/RecipeView';
import { HomeView } from '../view/HomeView';
import { DefaultView } from '../view/DefaultView';
import { SignInView } from '../view/SignInView';
import { ProfileView } from '../view/ProfileView';
import { SettingsView } from '../view/SettingsView';
import { UserContext } from '../shared/global/provider/UserProvider';
import RoutingPath from './RoutingPath';

export const Routing = (props) => {


  const [authUser, setAuthUser] = useContext(UserContext);

  const blockRouteIfAuthenticated = (navigateToView) => {
    return authUser ? HomeView : navigateToView
  }

  const blockRouteIfNotAuthenticated = (navigateToView) => {
    return !authUser ? HomeView : navigateToView
  }

  const checkIfUserIsAuthenticatedInBrowser = () => {
    setAuthUser(localStorage.getItem('username'))

  }

  useEffect(() => {
    checkIfUserIsAuthenticatedInBrowser();
  });

  return (
    <Router>
      {props.children}
      <Switch>
        <Route exact path={RoutingPath.recipeView} component={RecipeView} />
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView)} />
        <Route exact path={RoutingPath.profileView} component={blockRouteIfNotAuthenticated(ProfileView)} />
        <Route exact path={RoutingPath.settingsView} component={blockRouteIfNotAuthenticated(SettingsView)} />
        <Route component={DefaultView} />
      </Switch>
    </Router>
  );
};
