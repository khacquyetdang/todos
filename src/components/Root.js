import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

class Root extends Component {

  render() {
    //<Route path='/(:filter)' component={App} />

    return (
      <Provider store={this.props.store}>
        <Router>
            <Route path='/:filter?' component={App} />
        </Router>
      </Provider>
    );
  }
}

export default Root;
