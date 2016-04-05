import React from 'react';
import Reflux from 'reflux';
import Footer from '../Footer';
import Referral from './Referral';
import ShowInterest from './ShowInterest';
import ProjectStore from '../../stores/project-store';
import UserStore from '../../stores/user-store';
import ProjectActions from '../../actions/project-actions';
import moment from 'react-bootstrap-datetimepicker/node_modules/moment';
import UserConstants from '../../constants/user-constants';

var ShowOffer = React.createClass({

  mixins : [Reflux.listenTo(ProjectStore, 'onChange'), Reflux.listenTo(UserStore, 'onChange')],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState : function() {
    return {
      showInterest: 'false',
      referral: 'false'
    };
  },

  componentWillMount : function() {
    ProjectActions.getProject(this.props.params.projectId);
  },

  onChange : function (event, data) {
   switch (event) {
     case 'oneProject':
     this.setState(data);
     break;
     case 'user_logout':
     this.setState(
       {
         showInterest: 'false',
         referral: 'false'
       }
     );
     break;
     default:
   }
  },

  render : function () {

    var application = '';
    var applicationButtons = '';
    var user = UserStore.getUser();
    if(!user.userLoggedIn || user.role === UserConstants.role.user)  {
      if(this.state.showInterest == 'true'){
        application = <ShowInterest title={this.state.title} id={this.state.id} />;
      }

      if(this.state.referral == 'true'){
        application = <Referral title={this.state.title} id={this.state.id} />;
      }

      applicationButtons = (
                          <div className="pull-right form-group">
                            <button type="button" className="btn btn-primary show-interest-btn" onClick={this.showInterest}>Show Interest</button>
                            <button type="button" className="btn btn-primary" onClick={this.referral}>Referral</button>
                          </div>
                        );
    }

    return (
      <div className="container">
        <h2>{this.state.title}</h2>
        <hr />

        <h4>Job</h4>
        <div className="form-spacer center-block" ></div>
        <div className="row">
          <label className="col-md-4 control-label">ANU</label>
          <div className="col-md-8">
            {this.state.anu}
            </div>
        </div>
        <div className="row">
          <label className="col-md-4 control-label">Employer</label>
          <div className="col-md-8">
            {this.state.employer}
            </div>
        </div>
        <div className="row">
          <label className="col-md-4 control-label">Category</label>
          <div className="col-md-8">
            {this.state.category}
            </div>
        </div>
        <div className="row">
          <label className="col-md-4 control-label">Description</label>
          <div className="col-md-8">
            {this.state.description}
            </div>
        </div>
        <h4>Location</h4>
        <div className="form-spacer center-block" ></div>
        <div className="row">
          <label className="col-md-4 control-label">Country</label>
          <div className="col-md-8">
            {this.state.country}
            </div>
        </div>
        <div className="row">
          <label className="col-md-4 control-label">City</label>
          <div className="col-md-8">
            {this.state.city}
            </div>
        </div>

        <h4>Duration</h4>
        <div className="form-spacer center-block" ></div>
        <div className="row">
          <label className="col-md-4 control-label">Start Date</label>
          <div className="col-md-8">
            {moment(this.state.startDate).format('YYYY-MM-DD')}
            </div>
        </div>
        <div className="row">
          <label className="col-md-4 control-label">Period</label>
          <div className="col-md-8">
            {this.state.period}
            </div>
        </div>

        <h4>Skills</h4>
        <div className="form-spacer center-block" ></div>
        <div className="row">
          <label className="col-md-4 control-label"></label>
          <div className="col-md-8">
            {this.state.skills}
            </div>
        </div>

        <h4>Project Probability</h4>
        <div className="form-spacer center-block" ></div>
        <div className="row">
          <label className="col-md-4 control-label">Project Probability</label>
          <div className="col-md-8">
            {this.state.probability}
            </div>
        </div>

  			{applicationButtons}

        <div className="row">
          {application}
        </div>
      </div>
    );
  },

  showInterest : function(){
    var user = UserStore.getUser();
    if(!user.userLoggedIn) {
      this.context.router.push('/login/' + this.props.params.projectId);
    } else {
      this.setState({
        showInterest: 'true',
        referral: 'false'
      });
    }

  },

  referral : function(){
    var user = UserStore.getUser();
    if(!user.userLoggedIn) {
      this.context.router.push('/login/' + this.props.params.projectId);
    } else {
    this.setState({
      referral: 'true',
      showInterest: 'false'
    });
    }
  }

});

export default ShowOffer;
