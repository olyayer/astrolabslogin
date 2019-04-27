import React, { Component } from 'react';
import About from './routes/about/index';
import Users from './routes/users/index';
import Register from './routes/users/index';
import Success from './routes/users/index';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={About} />
        <Route path='/about' component={About} />
        <Route path='/success' component={Success} />
        <Route path='/users' component={Users} />
        <Route path='/register' component={Register} />
      </Switch>
    );
  }
}

export default App;












