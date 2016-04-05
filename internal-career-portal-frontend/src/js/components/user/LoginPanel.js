import React from 'react';
import Reflux from 'reflux';
import ReactDOM from 'react-dom';
import UserStore from '../../stores/user-store';
import UserActions from '../../actions/user-actions';
import NavBar from '../NavBar';

var LoginPanel = React.createClass({

  mixins : [Reflux.listenTo(UserStore, 'onChange')],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState : function() {
    return UserStore.getUser();
  },

  componentWillMount: function() {
    this.checkPermissions();
  },

  render : function(){
    this.checkPermissions();
    var fromGroupClassName = this.state.isLoginFailed ?  "form-group has-error" : "form-group";

    return (
      <div>
        <NavBar isLogin={true}/>
        <div className="container" >
          <div className="row" style={{height:100}}>
          </div>

          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Log to Career Portal</h3>
                </div>
                <div className="panel-body">
                  <center>
                  <form className="form-horizontal" role="login" onSubmit={this.login}>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  login: function(e) {
    e.preventDefault();
    UserActions.login(this.state);
  },

  onChange: function(event, data) {
    switch (event) {
      case 'user_login':
        this.context.router.push('/Offer/' + this.props.params.projectId);
      break;

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
  },

  login: function(e) {
    e.preventDefault();
    UserActions.login(this.state);
  },

  checkPermissions : function() {
    if(UserStore.getUser().userLoggedIn) {
      this.context.router.push('/');
    }
  }

});

export default LoginPanel;
