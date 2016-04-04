import React from 'react';
import Reflux from 'reflux';
import ReactDOM from 'react-dom';
import ProjectStore from '../../stores/project-store';
import ProjectActions from '../../actions/project-actions';
import { browserHistory } from 'react-router';
import DateTimeField from 'react-bootstrap-datetimepicker';
import moment from 'react-bootstrap-datetimepicker/node_modules/moment';
import Joi from 'joi';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import classnames from 'classnames';

var ShowInterest = React.createClass({

  mixins : [Reflux.listenTo(ProjectStore, 'onChange')],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  validatorTypes: {
    availabilityFrom: Joi.date().required().label('Availability From'),
    availabilityTo: Joi.date().required().label('Availability To'),
    cv: Joi.string().required().label('Curriculum Vitae'),
    teamLeader: Joi.string().required().label('Team Leader'),
    currentProject: Joi.string().required().label('Current Project')
  },

  getValidatorData: function() {
    return this.state;
  },

  getInitialState : function(){
    return {
      availabilityFrom: moment().format('YYYY-MM-DD'),
      availabilityTo: moment().format('YYYY-MM-DD'),
      haveVisa: '',
      cv: '',
      teamLeader: '',
      currentProject: ''
    }
  },

  render: function(){
    return (
      <div>
      <hr />
      <form className="add-offer form-horizontal">
      <h2>Apply For {this.props.title}</h2>
      <hr/>
      <fieldset>

        <div className="form-group">
          <label className="col-md-3 control-label" htmlFor="availability">Availability</label>
            <div className={"col-md-3 " + this.getClasses('availabilityFrom')}>
              <label className="col-md-3 control-label">From</label>
              <div className="input-group date">
                <DateTimeField inputFormat="YYYY-MM-DD" format="YYYY-MM-DD" viewMode="days" mode="date"  dateTime={this.state.availabilityFrom} minDate={moment()} maxDate={moment().add(2, 'months')} onChange={this.onAvailabilityfromChange} />
              </div>
            </div>
            <div className={"col-md-3 " + this.getClasses('availabilityTo')}>
              <label className="col-md-3 control-label">To</label>
              <div className="input-group date">
                <DateTimeField inputFormat="YYYY-MM-DD" format="YYYY-MM-DD" viewMode="days" mode="date"  dateTime={this.state.availabilityTo} minDate={moment()} maxDate={moment().add(2, 'months')} onChange={this.onAvailabilitytoChange} />
              </div>
            </div>
        </div>

        <div className="form-group">
          <label className="col-md-3 control-label" htmlFor="haveVisa">Do You Have A Visa ?</label>
          <div className="col-md-6">
            <select id="haveVisa" name="haveVisa" className="form-control" ref="haveVisa" onChange={this.onFormInputChange} >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>

        <div className={this.getClasses('cv')}>
          <label className="col-md-3 control-label" htmlFor="cv">Curriculum Vitae</label>
          <div className="col-md-6">
          <input id="cv" name="cv" type="text" placeholder="Link" className="form-control input-md" required="" ref="cv" value={this.state.cv} onChange={this.onFormInputChange} />
          {this.renderHelpText(this.props.getValidationMessages('cv'))}
          </div>
        </div>

        <div className={this.getClasses('teamLeader')}>
          <label className="col-md-3 control-label" htmlFor="teamleader">Team Leader</label>
          <div className="col-md-6">
          <input id="teamleader" name="teamleader" type="text" placeholder="" className="form-control input-md" required="" ref="teamleader" value={this.state.teamleader} onChange={this.onFormInputChange} />
          {this.renderHelpText(this.props.getValidationMessages('teamLeader'))}
          </div>
        </div>

        <div className={this.getClasses('currentProject')}>
          <label className="col-md-3 control-label" htmlFor="currentproject">Current Project</label>
          <div className="col-md-6">
          <input id="currentproject" name="currentproject" type="text" placeholder="" className="form-control input-md" required="" ref="currentproject" value={this.state.currentproject} onChange={this.onFormInputChange} />
          {this.renderHelpText(this.props.getValidationMessages('currentProject'))}
          </div>
        </div>

        <div className="pull-right form-group">
          <button type="button" className="btn btn-primary" onClick={this.send}>Send</button>
        </div>
      </fieldset>
      </form>
      </div>
    );
  },

  onFormInputChange : function(){
    this.setState({
      haveVisa: ReactDOM.findDOMNode(this.refs.haveVisa).value,
      cv: ReactDOM.findDOMNode(this.refs.cv).value,
      teamLeader: ReactDOM.findDOMNode(this.refs.teamleader).value,
      currentProject: ReactDOM.findDOMNode(this.refs.currentproject).value
    })
  },

  onAvailabilityfromChange : function(date){
      this.setState({availabilityFrom: date});
  },
  onAvailabilitytoChange : function(date){
      this.setState({availabilityTo: date});
  },

  renderHelpText : function(message) {
    return (
     <span className='help-block'>{message}</span>
    );
  },

  getClasses : function(field) {
    return classnames({
      'form-group': true,
      'has-error': !this.props.isValid(field)
    });
  },

  send : function(){
    console.log(this.state);
    const onValidate = (error) => {
      if (!error) {
        ProjectActions.showInterest(this.props.id, this.state);
      }
    };
    this.props.validate(onValidate);
  },

  onChange: function(event) {
    switch (event) {
      case 'interestAdded':
      this.context.router.push('/');
      break;

      default:
    }
  }

});

ShowInterest.propTypes = {
  errors: React.PropTypes.object,
  validate: React.PropTypes.func,
  isValid: React.PropTypes.func,
  handleValidation: React.PropTypes.func,
  getValidationMessages: React.PropTypes.func,
  clearValidations: React.PropTypes.func,
};

export default validation(strategy)(ShowInterest);
