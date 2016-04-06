import React from 'react';
import { Link } from 'react-router';


var InterestsCounter = React.createClass({

  render : function () {
    return (
      <Link className="btn btn-link pull-left" to={`/Offer/${this.props.offerID}/interests`}><span className="glyphicon glyphicon-user" aria-hidden="true">{' ' + this.props.count}</span></Link>
    );
  },

});

export default InterestsCounter;
