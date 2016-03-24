import Reflux from 'reflux';
import ProjectActions from '../actions/project-actions';
import ProjectService from '../services/project-service';

var ProjectStore = Reflux.createStore({
    listenables : [ProjectActions],
    getAllProjects : function () {
      ProjectService.get('/projects').then(function(data) {
        console.log(data);
        this.fireUpdate('allProjects', data);
      }.bind(this));


    },

    fireUpdate : function (event, data) {
      this.trigger(event, data);
    }
});

export default ProjectStore;
