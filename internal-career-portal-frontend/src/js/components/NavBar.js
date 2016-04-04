import React from 'react';
import LoginWidget from './user/LoginWidget';
import UserStore from '../stores/user-store';

var NavBar = React.createClass({

  render : function(){
    var login = this.props.isLogin ?   "" : <LoginWidget inline={true}/>;
    return (
    <div className="navbar navbar-default navbar-fixed-top">
  		<div className="container">
  			<div className="navbar-header">
  				<button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
  					<span className="icon-bar"></span>
  					<span className="icon-bar"></span>
  					<span className="icon-bar"></span>
  				</button>
  				<img src="http://www.piterion.com/fileadmin/templates/Public/Images/logo_piterion.png" height="43" width="226" />
  			</div>
        {login}
      </div>
    </div>
    );
  }
});

export default NavBar;
