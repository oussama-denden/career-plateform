import Reflux from 'reflux';
import UserActions from '../actions/user-actions';
import ProjectService from '../services/project-service';
import UserConstants from '../constants/user-constants';

var UserStore = Reflux.createStore({
    listenables: [UserActions],
    login: function(data){
      ProjectService.login('/login', {username: data.username, password: data.password}).then(function(response){
        if(response.status == 200) {
          response.userLoggedIn = true;
          localStorage.setItem(UserConstants.userLocalStorageKey, JSON.stringify({
            username: data.username,
            token: response.headers.get('X-AUTH-TOKEN'),
            rememberMe: false,
            userLoggedIn: response.userLoggedIn
          }));
          this.fireUpdate('user_login', response);
        } else {
          this.fireUpdate('login_failed', response);
        }

      }.bind(this));
    },

    logout: function() {
      localStorage.removeItem(UserConstants.userLocalStorageKey);
      this.fireUpdate('user_logout');
    },

    fireUpdate: function (event, data) {
      this.trigger(event, data);
    },

    getUser: function() {
      var user = localStorage.getItem(UserConstants.userLocalStorageKey);
      if (!user) {
        this.user = {
          username: '',
          password: '',
          rememberMe: false,
          userLoggedIn: false
        }
      } else {
        this.user = JSON.parse(user)
      }
      return this.user;
    }

});

export default UserStore;
