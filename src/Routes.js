import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CenterPage from './Pages/CenterPage/CenterPage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/center" component={CenterPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
