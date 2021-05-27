import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BestPage from './Pages/BestPage/BestPage';
import MainPage from './Pages/MainPage/MainPage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={BestPage} />
          {/* <Route exact path="/country" component={MainPage} /> */}
          <Route exact path="/country/:id" component={MainPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
