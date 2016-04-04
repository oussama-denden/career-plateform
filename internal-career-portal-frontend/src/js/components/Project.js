import React from 'react';
import { Link } from 'react-router'

var Project = React.createClass({

  render : function(){
    return (
      <div className="col-md-4 col-sm-6 project">
          <div className="thumbnail">
            <div className="caption">
                <h3>{this.props.project.title}</h3>
						    <ul className="list-group">
							         <li className="list-group-item">{this.props.project.location}</li>
							         <li className="list-group-item">Duration: {this.props.project.duration}</li>
							        <li className="list-group-item">Project Probability: {this.props.project.probability}</li>
							        <li className="list-group-item">Skills : {this.props.project.skills}</li>
						    </ul>
                <p>
                  <Link className="btn btn-link pull-right" to={`/Offer/${this.props.project.id}`}>Show <i className="fa fa-angle-double-right"></i></Link>
                </p>
            </div>
          </div>
      </div>
    );
  }
});

export default Project;
