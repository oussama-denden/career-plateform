import Reflux from 'reflux';
import UserActions from '../actions/user-actions';
import ProjectService from '../services/project-service';

var UserStore = Reflux.createStore({
    listenables : [UserActions],
    login : function(data){
      ProjectService.post('/user/login', {username: data.username, password: data.password, rememberMe: data.rememberMe}).then(function(response){
        if(response.username !== undefined) {
          localStorage.setItem('username', response.username);
          localStorage.setItem('rememberMe', response.userLoggedIn ? true : false);
          localStorage.setItem('role', response.role);
          localStorage.setItem('userLoggedIn', true);
          response.userLoggedIn = true;
        }
        this.fireUpdate('user_login', response);
      }.bind(this));
    },

    logout : function() {
      localStorage.removeItem('username');
      localStorage.removeItem('rememberMe');
      localStorage.removeItem('role');
      localStorage.removeItem('userLoggedIn');
      this.fireUpdate('user_logout', null);
    },

    fireUpdate : function (event, data) {
      this.trigger(event, data);
    }

});

export default UserStore;
