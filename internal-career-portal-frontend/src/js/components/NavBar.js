import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router'
import UserStore from '../stores/user-store';
import LoginWidget from './user/LoginWidget';
import LogoutWidget from './user/LogoutWidget';

var NavBar = React.createClass({

  mixins : [Reflux.listenTo(UserStore, 'onChange')],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render : function(){
    var login = this.props.isLogin ? "" : UserStore.getUser().userLoggedIn ?   <LogoutWidget/> : <LoginWidget/>;
    return (
    <div className="navbar navbar-default navbar-fixed-top">
  		<div className="container">
  			<div className="navbar-header">
  				<button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
  					<span className="icon-bar"></span>
  					<span className="icon-bar"></span>
  					<span className="icon-bar"></span>
  				</button>
          <Link to={`/`}>
  				    <img src="http://www.piterion.com/fileadmin/templates/Public/Images/logo_piterion.png" height="43" width="226" />
          </Link>
  			</div>
        {login}
      </div>
    </div>
    );
  },

  onChange: function(event, data) {
    switch (event) {
      case 'user_login':
      this.setState({});
      break;

      case 'user_logout':
      this.setState({});
      break;

      default:
    }
  },
});

export default NavBar;
