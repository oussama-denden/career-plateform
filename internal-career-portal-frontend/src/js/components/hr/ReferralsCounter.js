import React from 'react';
import { Link } from 'react-router';

var ReferralsCounter = React.createClass({

  render : function () {
    return (
      <Link className="btn btn-link pull-left" to={`/`}><span className="glyphicon glyphicon-briefcase" aria-hidden="true">{' ' + this.props.count}</span></Link>
    );
  }

});

export default ReferralsCounter;
