import React from 'react';
import Reflux from 'reflux';
import ReactDOM from 'react-dom'
import FormInput from '../FormInput';
import UserStore from '../../stores/user-store';
import UserActions from '../../actions/user-actions';

var LoginWidget = React.createClass({

  mixins : [Reflux.listenTo(UserStore, 'onChange')],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState : function() {
    return UserStore.getUser();
  },

  render : function(){
    var fromGroupClassName = this.state.isLoginFailed ?  "form-group has-error" : "form-group";
    return (
      <center>
  		  <div className="navbar-collapse collapse" id="navbar-main">
  			   <form className="navbar-form navbar-right" role="login" onSubmit={this.login}>
            <div className="row no-gutter">
              <div className="col-sm-5 col-xs-3">
                <div className={fromGroupClassName}>
                  <input type="text" className="form-control" ref="username" placeholder="Username" value={this.state.username} onChange={this.onFromInputChange} />
                </div>
              </div>
              <div className="col-sm-5 col-xs-3">
                <div className={fromGroupClassName}>
                  <input type="password" className="form-control" ref="password" placeholder="Password" value={this.state.password} onChange={this.onFromInputChange} />
                </div>
              </div>
              <div className="col-sm-2 col-xs-1 pull-left">
  						  <button type="submit" className="btn btn-default" onClick={this.login}>Sign In</button><br/>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5 col-xs-3">
                <div className="form-group pull-left">
                  <label><input type="checkbox" ref="rememberMe" value={this.state.rememberMe} onChange={this.onFromInputChange}/>Remember me</label>
                </div>
              </div>
            </div>
  				</form>
  			</div>
  		</center>
    );
  },

  login: function(e) {
    e.preventDefault();
    UserActions.login(this.state);
  },

  onChange: function(event, data) {
    switch (event) {
      case 'login_failed':
      var user = UserStore.getUser();
      user.isLoginFailed = true;
      this.setState(user);
      break;
      default:
    }
  },

  onFromInputChange: function() {
    this.setState({
        username: ReactDOM.findDOMNode(this.refs.username).value,
        password: ReactDOM.findDOMNode(this.refs.password).value,
        rememberMe: ReactDOM.findDOMNode(this.refs.rememberMe).value
    });
  }

});

export default LoginWidget;
