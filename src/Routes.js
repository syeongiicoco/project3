import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BestPage from './Pages/BestPage/BestPage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={BestPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
