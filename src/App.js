import React from 'react';
import './App.css';
import About from './About';
import Landing from './Landing';
import Nav from './Nav';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/(login)" component={LoginContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </div>
    </Router>
  );
}

const LoginContainer = () => (
  <div className="App">
    <Route exact path="/" render={() => <Redirect to="/login" />} />
    <Route path="/login" component={Login} />
  </div>
)


const DefaultContainer = () => (
  <div>
    <Nav />
    <Route exact path='/buy' component={Landing} />
    <Route exact path='/sell' component={About} />
  </div>
)

export default App;
