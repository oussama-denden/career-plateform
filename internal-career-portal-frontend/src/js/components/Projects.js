import React from 'react';
import Reflux from 'reflux';
import Project from './Project';
var Projects = React.createClass({

  render : function(){
    var countryProjects = [];
    this.props.projects.map(project =>{
        countryProjects.push(
          <Project key={project.id} project={project} />
        )
      });
    return (
      <div>
        <div className="row">
              <div className="col-lg-12">
                  <h3>{this.props.country}</h3>
              </div>
        </div>
        <div className="row">
          {countryProjects}
        </div>
      </div>
    );
  }


});

export default Projects;
