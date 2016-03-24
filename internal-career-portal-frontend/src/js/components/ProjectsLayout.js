import React from 'react';
import Reflux from 'reflux';
import ProjectStore from '../stores/project-store';
import ProjectActions from '../actions/project-actions';
import Projects from './Projects';

var ProjectsLayout = React.createClass({

  mixins : [Reflux.listenTo(ProjectStore, 'onChange')],

  getInitialState : function() {
    return {};
  },

  componentWillMount : function() {
    ProjectActions.getAllProjects();
  },

  onChange : function (event, data) {
   switch (event) {
     case 'allProjects':
     this.setState(data);
     break;

     default:
   }
  },

  render : function(){
    var allProjects = [];
    for(var country in this.state){
      allProjects.push(<Projects key={country} country={country} projects={this.state[country]}/>);
    }

    return (
        <div>
        {allProjects}
        </div>
    );
  }
});

export default ProjectsLayout;
