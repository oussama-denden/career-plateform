import Fetch from 'whatwg-fetch';
import UserStore from '../stores/user-store';

var baseUrl = 'http://localhost:8080/careerportal';

var ProjectService = {
  get : function(url) {
    var data;
    if(UserStore.getUser().token == undefined){
      data = {
        method: 'get'
      }
    }else{
      data = {
        method: 'get',
        headers: {
          'X-AUTH-TOKEN': UserStore.getUser().token
        }
      }
    }
    return fetch(baseUrl + url, data).then(function(response) {
       return response.json();
    });
  },
  post : function(url, data){
    return fetch(baseUrl + url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': UserStore.getUser().token
      },
      body: JSON.stringify(data)
    }).then(function(response){
      console.log("response code:" + response.status);
      return response.json();
    });
  },

  login : function(url, data){
    return fetch(baseUrl + url, {
      method: 'post',
      body: JSON.stringify(data)
    }).then(function(response){
      console.log("response code:" + response.status);
      return response;
    });
  }
}
export default ProjectService;
