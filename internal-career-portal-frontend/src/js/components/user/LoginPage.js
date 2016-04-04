import React from 'react';
import Reflux from 'reflux';
import LoginWidget from './LoginWidget';
import NavBar from '../NavBar';
import UserStore from '../../stores/user-store';

var LoginPage = React.createClass({

  mixins : [Reflux.listenTo(UserStore, 'onChange')],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render : function() {

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
                  <LoginWidget inline={false} loginAttempt={this.props.params.loginAttempt}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  onChange: function(event, data) {
    switch (event) {
      case 'user_login':
      if(data.errorCode == 0) {
          this.context.router.push('/login/' + 1);
      } else {
        this.context.router.push('/');
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
    }
});

export default LoginPage;
