import React from 'react';
import Reflux from 'reflux';
import ReactDOM from 'react-dom'
import FormInput from '../FormInput';
import UserStore from '../../stores/user-store';
import UserActions from '../../actions/user-actions';

var Login = React.createClass({
  mixins : [Reflux.listenTo(UserStore, 'onChange')],

  getInitialState: function() {
    return {
      username: '',
      password: '',
      rememberMe: false
    }
  },

  render : function(){
    var inlineLoginFrom = (
      <center>
  				<div className="navbar-collapse collapse" id="navbar-main">
  					<form className="navbar-form navbar-right" role="login">
              <div className="form-group">
                <input type="text" className="form-control" ref="inlineUsername" placeholder="Username" value={this.state.username} onChange={this.onFromInputChange} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" ref="inlinePassword" placeholder="Password" value={this.state.password} onChange={this.onFromInputChange} />
              </div>
  						<button type="submit" className="btn btn-default" onClick={this.login}>Sign In</button>
  					</form>
  				</div>
  			</center>
    );

    var horizontalLoginForm = (
      <center>
      <form className="form-horizontal" role="login">
        <div className="form-group">
          <label htmlFor="inputEmail" className="col-sm-2 control-label">Username</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail" ref="username" placeholder="Username" value={this.state.username} onChange={this.onFromInputChange}/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" ref="password" placeholder="Password" value={this.state.password} onChange={this.onFromInputChange}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <div className="checkbox">
              <label>
                <input type="checkbox" ref="rememberMe" value={this.state.rememberMe} onChange={this.onFromInputChange}/> Remember me
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default" onClick={this.login}>Sign in</button>
          </div>
        </div>
      </form>
    </center>
    );
    if(this.props.inline) {
      return inlineLoginFrom;
    } else {
      return horizontalLoginForm;
    }

  },

  login: function(e) {
    e.preventDefault();
    UserActions.login(this.state);
  },

  onChange: function(event, data) {
    switch (event) {
      case 'user_login':
      break;

      default:
    }},

    onFromInputChange: function() {
      var username = this.props.inline ? ReactDOM.findDOMNode(this.refs.inlineUsername).value : ReactDOM.findDOMNode(this.refs.username).value;
      var password = this.props.inline ? ReactDOM.findDOMNode(this.refs.inlinePassword).value : ReactDOM.findDOMNode(this.refs.password).value;
      var rememberMe = this.props.inline ? false : ReactDOM.findDOMNode(this.refs.password).value;
      
      this.setState({
          username: username,
          password: password,
          rememberMe: rememberMe
      });
    }

});

export default Login;
