import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecipeView } from '../view/RecipeView';
import { HomeView } from '../view/HomeView';
import { DefaultView } from '../view/DefaultView';

export const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/recipe" component={RecipeView} />
        <Route exact path="/" component={HomeView} />
        <Route component={DefaultView} />
      </Switch>
    </Router>
  );
};
