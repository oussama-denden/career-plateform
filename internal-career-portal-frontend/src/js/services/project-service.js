import Fetch from 'whatwg-fetch';

var baseUrl = 'http://localhost:8080/careerportal';

var ProjectService = {
  get : function(url) {
    return fetch(baseUrl + url).then(function(response) {
       return response.json();
    });
  }
}
export default ProjectService;
