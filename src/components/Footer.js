import React, { Component } from 'react';
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from '../constants.js';
import FilterLink from './FilterLink.js';

class Footer extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      text: ''
    }
  }


 render() {
   return (
     <p>
     Show :
     <FilterLink filter={FILTER_ALL}
     > All</FilterLink>
     { '  '}
     <FilterLink filter={FILTER_ACTIVE}>
     Active
     </FilterLink>
     { '  '}
     <FilterLink filter={FILTER_COMPLETED}>
      Completed
     </FilterLink>
     </p>
   );
 }
}

export default (Footer);
