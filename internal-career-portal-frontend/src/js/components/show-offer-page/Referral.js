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

var Referral = React.createClass({

  mixins : [Reflux.listenTo(ProjectStore, 'onChange')],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  validatorTypes: {
    name: Joi.string().required().label('Name'),
    email: Joi.string().email().required().label('Email'),
    dateOfBirth: Joi.date().required().label('Date Of Birth'),
    placeOfBirth: Joi.string().required().label('Place Of Birth'),
    currentDesignation: Joi.string().required().label('Current Designation'),
    comments: Joi.string().required().label('Comments')
  },

  getValidatorData: function() {
    return this.state;
  },

  getInitialState : function(){
    return {
      name : '',
      email: '',
      haveVisa: '',
      gendre: '',
      dateOfBirth: moment().format('YYYY-MM-DD'),
      placeOfBirth:'',
      currentDesignation: '',
      cv: '',
      comments: ''
    };
  },

  render : function(){
    return (
      <div>
      <hr />
      <form className="add-offer form-horizontal">
      <h2>Referral For {this.props.title}</h2>
      <hr/>
      <fieldset>

        <div className={this.getClasses('name')}>
          <label className="col-md-3 control-label" htmlFor="name">Name</label>
          <div className="col-md-6">
          <input id="name" name="name" type="text" placeholder="" className="form-control input-md" required="" ref="name" value={this.state.name} onChange={this.onFormInputChange}/>
          {this.renderHelpText(this.props.getValidationMessages('name'))}
          </div>
        </div>

        <div className={this.getClasses('email')}>
          <label className="col-md-3 control-label" htmlFor="email">Email</label>
          <div className="col-md-6">
          <input id="email" name="email" type="text" placeholder="" className="form-control input-md" required="" ref="email" value={this.state.email} onChange={this.onFormInputChange}/>
          {this.renderHelpText(this.props.getValidationMessages('email'))}
          </div>
        </div>

        <div className="form-group">
          <label className="col-md-3 control-label" htmlFor="haveVisa">Have A Visa ?</label>
          <div className="col-md-6">
            <select id="haveVisa" name="haveVisa" className="form-control" onChange={this.onFormInputChange} >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Don't know">Dont know</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="col-md-3 control-label" htmlFor="gendre">Gendre</label>
          <div className="col-md-6">
          <label className="radio-inline" htmlFor="gendre-0">
            <input type="radio" name="gendre" id="gendre-0" ref="male" value="Male" onChange={this.onFormInputChange} defaultChecked/>
            Male
          </label>
          <label className="radio-inline" htmlFor="gendre-1">
            <input type="radio" name="gendre" id="gendre-1" value="Female" onChange={this.onFormInputChange} />
            Female
          </label>
          </div>
        </div>

        <div className={this.getClasses('dateOfBirth')}>
          <label className="col-md-3 control-label" htmlFor="dateOfBirth">Date Of Birth</label>
          <div className="col-md-6">
          <DateTimeField inputFormat="YYYY-MM-DD" format="YYYY-MM-DD" viewMode="days" mode="date"  dateTime={this.state.dateOfBirth} minDate={moment()} maxDate={moment().add(2, 'months')} onChange={this.onDateOfBirthChange} />
          {this.renderHelpText(this.props.getValidationMessages('dateOfBirth'))}
          </div>
        </div>

        <div className={this.getClasses('placeOfBirth')}>
          <label className="col-md-3 control-label" htmlFor="placeOfBirth">Place Of Birth</label>
          <div className="col-md-6">
          <input id="placeOfBirth" name="placeOfBirth" type="text" placeholder="" className="form-control input-md" required="" ref="placeOfBirth" value={this.state.placeOfBirth} onChange={this.onFormInputChange}/>
          {this.renderHelpText(this.props.getValidationMessages('placeOfBirth'))}
          </div>
        </div>

        <div className={this.getClasses('currentDesignation')}>
          <label className="col-md-3 control-label" htmlFor="current-designation">Current Designation</label>
          <div className="col-md-6">
          <input id="current-designation" name="current-designation" type="text" placeholder="" className="form-control input-md" required="" ref="currentDesignation" value={this.state.currentDesignation} onChange={this.onFormInputChange}/>
          {this.renderHelpText(this.props.getValidationMessages('currentDesignation'))}
          </div>
        </div>

        <div className="form-group">
          <label className="col-md-3 control-label" htmlFor="cv">Curriculum Vitae</label>
          <div className="col-md-6">
          <input id="cv" name="cv" type="text" placeholder="" className="form-control input-md" required="" ref="cv" value={this.state.cv} onChange={this.onFormInputChange}/>
          </div>
        </div>

        <div className={this.getClasses('comments')}>
          <label className="col-md-3 control-label" htmlFor="comments">Comments</label>
          <div className="col-md-6">
          <textarea name="comments" id="comments" rows="10" placeholder="" className="form-control" ref="comments" value={this.state.comments} onChange={this.onFormInputChange}  />
          {this.renderHelpText(this.props.getValidationMessages('comments'))}
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

  onFormInputChange : function(event){
    var genre = ReactDOM.findDOMNode(this.refs.male).checked ? "Male" : "Female";
    this.setState({
        name : ReactDOM.findDOMNode(this.refs.name).value,
        email: ReactDOM.findDOMNode(this.refs.email).value,
        haveVisa: ReactDOM.findDOMNode(this.refs.name).value,
        gendre: genre,
        placeOfBirth: ReactDOM.findDOMNode(this.refs.placeOfBirth).value,
        currentDesignation: ReactDOM.findDOMNode(this.refs.currentDesignation).value,
        cv: ReactDOM.findDOMNode(this.refs.cv).value,
        comments: ReactDOM.findDOMNode(this.refs.comments).value
    });
  },

  onDateOfBirthChange : function(date){
      this.setState({dateOfBirth: date});
  },

  onChange: function(event) {
    switch (event) {
      case 'referralAdded':
      this.context.router.push('/');
      break;

      default:
    }
  },

  renderHelpText : function(messages) {
    var htmlMessages = [];
    messages.map(message =>{
        htmlMessages.push(
          <span key={message} className='help-block'>{message}</span>
        )
      });
    return (
      <div>
        {htmlMessages}
     </div>
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
      console.log(error);
      if (!error) {
        ProjectActions.addReferral(this.props.id, this.state);
      }
    };
    this.props.validate(onValidate);
  }

});

Referral.propTypes = {
  errors: React.PropTypes.object,
  validate: React.PropTypes.func,
  isValid: React.PropTypes.func,
  handleValidation: React.PropTypes.func,
  getValidationMessages: React.PropTypes.func,
  clearValidations: React.PropTypes.func,
};

const options = {
  language: {
    date: {
      base: '"{{key}}" must be a valid date format YYYY-MM-DD',
    }
  }
};
export default validation(strategy(options))(Referral);
