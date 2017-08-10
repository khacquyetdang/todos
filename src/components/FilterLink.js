import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { FILTER_ALL } from '../constants'

class FilterLink extends Component {
  
  componentWillReceiveProps(nextProps) {
    this.setState({ filter: nextProps.filter });
  }


  render() {
    return (
      <Link to={this.props.filter === 'all' ? '' : this.props.filter}
        >
          { this.props.children }
        </Link>
    );
  }
}

export default (FilterLink);
