import React from 'react';

var FormInput = React.createClass({

  render : function(){
    return (
      <div className="form-group">
        <input type="text" className="form-control" name={this.props.name} placeholder={this.props.placeholder} />
      </div>
    );
  },

  propTypes : {
    name: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string
  }
});

export default FormInput;
