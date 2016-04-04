import Fetch from 'whatwg-fetch';

var baseUrl = 'http://localhost:8080/careerportal';

var ProjectService = {
  get : function(url) {
    return fetch(baseUrl + url).then(function(response) {
       return response.json();
    });
  },
  post : function(url, data){
    return fetch(baseUrl + url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function(response){
      console.log("response code:" + response.status);
      return response.json();
    });
  }
}
export default ProjectService;
