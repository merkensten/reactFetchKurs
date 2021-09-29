import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecipeView } from '../view/RecipeView';
import { HomeView } from '../view/HomeView';
import { DefaultView } from '../view/DefaultView';
import { SignInView } from '../view/SignInView';

export const Routing = (props) => {
  return (
    <Router>
      {props.children}
      <Switch>
        <Route exact path="/recipe" component={RecipeView} />
        <Route exact path="/" component={HomeView} />
        <Route exact path="/sign-in" component={SignInView} />
        <Route component={DefaultView} />
      </Switch>
    </Router>
  );
};
