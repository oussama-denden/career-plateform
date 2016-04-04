import React from 'react';

var JobForm = React.createClass({

  render : function () {
    return (
      <form role="form">
        <div className="form-group">
          <input type="email" className="form-control" id="email" />
        </div>
      </form>
    );
  }

});
export default JobForm;
