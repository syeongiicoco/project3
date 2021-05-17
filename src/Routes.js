import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Wrapper from './Components/Wrapper/Wrapper';
import BestPage from './Pages/BestPage/BestPage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Wrapper>
<<<<<<< HEAD
            <Route exact path="/" component={BestPage} />]
=======
            <Route exact path="/" component={BestPage} />
>>>>>>> 560c2a0 (Add: header setInterval 기능구현)
          </Wrapper>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
