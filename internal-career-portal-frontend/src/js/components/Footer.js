import React from 'react';

var Footer = React.createClass({
  
  render : function(){
    return (
      <footer>
          <div className="row">
              <div className="col-lg-12">
                  <p>{this.props.text}</p>
              </div>
          </div>
      </footer>
    );
  },
  propTypes : {
    text: React.PropTypes.string.isRequired
  }
});

export default Footer;
