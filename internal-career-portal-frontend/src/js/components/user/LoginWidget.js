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
    return {
      username: localStorage.getItem('username') ? localStorage.getItem('username') : '',
      password: '',
      rememberMe: localStorage.getItem('rememberMe') ? localStorage.getItem('rememberMe') : false,
      role: localStorage.getItem('role') ? localStorage.getItem('role') : '',
      userLoggedIn: localStorage.getItem('userLoggedIn') ? localStorage.getItem('userLoggedIn') : false

    }
  },

  render : function(){
    var fromGroupClassName = this.props.loginAttempt > 0 ?  "form-group has-error" : "form-group";
    var inlineLoginFrom = (
      <center>
  		  <div className="navbar-collapse collapse" id="navbar-main">
  			   <form className="navbar-form navbar-right" role="login">
            <div className="row no-gutter">
              <div className="col-sm-5 col-xs-3">
                <div className={fromGroupClassName}>
                  <input type="text" className="form-control" ref="inlineUsername" placeholder="Username" value={this.state.username} onChange={this.onFromInputChange} />
                </div>
              </div>
              <div className="col-sm-5 col-xs-3">
                <div className={fromGroupClassName}>
                  <input type="text" className="form-control" ref="inlinePassword" placeholder="Password" value={this.state.password} onChange={this.onFromInputChange} />
                </div>
              </div>
              <div className="col-sm-2 col-xs-1 pull-left">
  						  <button type="submit" className="btn btn-default" onClick={this.login}>Sign In</button><br/>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5 col-xs-3">
                <div className="form-group pull-left">
                  <label><input type="checkbox" ref="inlineRememberMe" value={this.state.rememberMe} onChange={this.onFromInputChange}/>Remember me</label>
                </div>
              </div>
            </div>
  				</form>
  			</div>
  		</center>
    );

    var horizontalLoginForm = (
      <center>
      <form className="form-horizontal" role="login">
        <div className={fromGroupClassName}>
          <label htmlFor="inputEmail" className="col-sm-2 control-label">Username</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail" ref="username" placeholder="Username" value={this.state.username} onChange={this.onFromInputChange}/>
          </div>
        </div>
        <div className={fromGroupClassName}>
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
        <div className="form-group pull">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default" onClick={this.login}>Sign in</button>
          </div>
        </div>
      </form>
    </center>
    );

    var logout = (
      <center>
      <div className="collapse navbar-collapse" id="navbar-main">
				<ul className="nav navbar-nav navbar-right">
					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">
							<span className="glyphicon glyphicon-user"></span>
							<strong>{this.state.username}</strong>
							<span className="glyphicon glyphicon-chevron-down"></span>
						</a>
						<ul className="dropdown-menu">
							<li>
								<div className="navbar-login">
									<div className="row">
										<div className="col-lg-4">
											<p className="text-center">
												<span className="glyphicon glyphicon-user icon-size"></span>
											</p>
										</div>
										<div className="col-lg-8">
											<p className="text-left"><strong>{this.state.role}</strong></p>
											<p className="text-left small">{this.state.username}</p>
											<p className="text-left">
												<a href="#" className="btn btn-primary btn-block btn-sm">Edit Profil</a>
											</p>
										</div>
									</div>
								</div>
							</li>
							<li className="divider"></li>
							<li>
								<div className="navbar-login navbar-login-session">
									<div className="row">
										<div className="col-lg-12">
											<p>
												<button className="btn btn-danger btn-block" onClick={this.logout}>Logout</button>
											</p>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
    </center>
    );

    if(this.state.userLoggedIn) {
      return logout;
    } else if(this.props.inline) {
      return inlineLoginFrom;
    } else {
      return horizontalLoginForm;
    }

  },

  login: function(e) {
    e.preventDefault();
    UserActions.login(this.state);
  },

  logout: function() {
    UserActions.logout();
  },

  onChange: function(event, data) {
    switch (event) {
      case 'user_login':
      if(data.errorCode == 0) {
          this.context.router.push('/login/' + 1);
      } else {
        console.log(data);
        this.setState(data);
      }
      break;
      case 'user_logout':
      this.setState(
        {
          username: '',
          password: '',
          rememberMe: false,
          role: '',
          userLoggedIn: false

        }
      );
      break;
      default:
    }
  },

    onFromInputChange: function() {
      var username = this.props.inline ? ReactDOM.findDOMNode(this.refs.inlineUsername).value : ReactDOM.findDOMNode(this.refs.username).value;
      var password = this.props.inline ? ReactDOM.findDOMNode(this.refs.inlinePassword).value : ReactDOM.findDOMNode(this.refs.password).value;
      var rememberMe = this.props.inline ? ReactDOM.findDOMNode(this.refs.inlineRememberMe).value : ReactDOM.findDOMNode(this.refs.rememberMe).value;

      this.setState({
          username: username,
          password: password,
          rememberMe: rememberMe
      });
    }

});

export default LoginWidget;
