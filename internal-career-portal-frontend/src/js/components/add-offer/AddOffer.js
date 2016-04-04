import React from 'react';
import Reflux from 'reflux';
import ReactDOM from 'react-dom';
import ProjectStore from '../../stores/project-store';
import ProjectActions from '../../actions/project-actions';
import DateTimeField from 'react-bootstrap-datetimepicker';
import moment from 'react-bootstrap-datetimepicker/node_modules/moment';
import { browserHistory } from 'react-router';

var JobForm = React.createClass({

  mixins : [Reflux.listenTo(ProjectStore, 'onChange')],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState : function() {
    return {
      title: '',
      link: '',
      salesManager: '',
      hrResponsible: '',
      teamLeader: '',
      visibility: 'External',
      anu: 'Yes',
      employer: 'PITERION TUNISIA',
      category: 'Engineering',
      description: '',
      country: 'Germany',
      city: 'Stuttgart',
      startDate: moment().format('YYYY-MM-DD'),
      period: 'Short Term',
      skills: '',
      probability: ''
    };
  },

  render : function () {
    return (
      <div className="container">
      <form className="add-offer form-horizontal">
  			<h2>Add New Offer</h2>
        <hr/>
  			<h4>Job</h4>
  			<div classNameName="form-spacer center-block" ></div>
  			<fieldset className="form-fields">
  				<div className="form-group">
  				  <label className="col-md-3 control-label" htmlFor="textinput">Title</label>
  				  <div className="col-md-6">
  				  <input id="textinput" name="textinput" type="text" placeholder="Title" className="form-control input-md" required="" ref="title" value={this.state.title} onChange={this.onFromInputChange}/>
  				  </div>
  				</div>

  				<div className="form-group">
  				  <label className="col-md-3 control-label" htmlFor="link">Link</label>
  				  <div className="col-md-6">
  				  <input id="link" name="link" type="text" placeholder="Link" className="form-control input-md" required="" ref="link" value={this.state.link} onChange={this.onFromInputChange}/>
  				  </div>
  				</div>

  				<div className="form-group">
  				  <label className="col-md-3 control-label" htmlFor="salesmanager">Sales Manager</label>
  				  <div className="col-md-6">
  				  <input id="salesmanager" name="salesmanager" type="text" placeholder="Sales Manager" className="form-control input-md" required="" ref="salesManager" value={this.state.salesManager} onChange={this.onFromInputChange}/>
  				  </div>
  				</div>

  				<div className="form-group">
  				  <label className="col-md-3 control-label" htmlFor="hrresponsible">HR Responsible</label>
  				  <div className="col-md-6">
  				  <input id="hrresponsible" name="hrresponsible" type="text" placeholder="HR Responsible" className="form-control input-md" required="" ref="hrResponsible" value={this.state.hrResponsible} onChange={this.onFromInputChange}/>
  				  </div>
  				</div>

  				<div className="form-group">
  				  <label className="col-md-3 control-label" htmlFor="teamleader">Team Leader</label>
  				  <div className="col-md-6">
  				  <input id="teamleader" name="teamleader" type="text" placeholder="Team Leader" className="form-control input-md" required="" ref="teamLeader" value={this.state.teamLeader} onChange={this.onFromInputChange}/>
  				  </div>
  				</div>

  				<div className="form-group">
  				  <label className="col-md-3 control-label" htmlFor="visibility">Visibility</label>
  				  <div className="col-md-6">
  					<label className="radio-inline" htmlFor="visibility-0">
  					  <input type="radio" name="visibility" id="visibility-0" value="Internal" ref="visibilityInter" defaultChecked={this.state.visibility === 'Internal' ? true : false} onChange={this.onFromInputChange}/>
  					  Internal
  					</label>
  					<label className="radio-inline" htmlFor="visibility-1">
  					  <input type="radio" name="visibility" id="visibility-1" value="External" ref="visibilityExter" defaultChecked={this.state.visibility === 'External' ? true : false} onChange={this.onFromInputChange}/>
  					  External
  					</label>
  				  </div>
  				</div>

  				<div className="form-group">
  				  <label className="col-md-3 control-label" htmlFor="anu">ANU</label>
  				  <div className="col-md-6">
  					<label className="radio-inline" htmlFor="anu-0">
  					  <input type="radio" name="anu" id="anu-0" value="Yes" ref="anuYes" defaultChecked={this.state.anu === 'Yes' ? true : false} onChange={this.onFromInputChange}/>
  					  Yes
  					</label>
  					<label className="radio-inline" htmlFor="anu-1">
  					  <input type="radio" name="anu" id="anu-1" value="No" ref="anuNo" defaultChecked={this.state.anu === 'No' ? true : false} onChange={this.onFromInputChange}/>
  					  No
  					</label>
  				  </div>
  				</div>

  				<div className="form-group">
  				  <label className="col-md-3 control-label" htmlFor="employer">Employer</label>
  				  <div className="col-md-6">
  					<select id="employer" name="employer" className="form-control" ref="employer"  onChange={this.onFromInputChange} defaultValue={this.state.employer}>
  					  <option value="Flexilion" ref="flexilion">Flexilion</option>
  					  <option value="PITERION GmbH">PITERION GmbH</option>
  					  <option value="PITERION USA">PITERION USA</option>
  					  <option value="PITERION INDIA">PITERION INDIA</option>
  					  <option value="PITERION TUNISIA">PITERION TUNISIA</option>
  					</select>
  				  </div>
  				</div>

  				<div className="form-group">
  				  <label className="col-md-3 control-label" htmlFor="category">Category</label>
  				  <div className="col-md-6">
  					<select id="category" name="category" className="form-control" ref="category" onChange={this.onFromInputChange} defaultValue={this.state.category}>
  					  <option value="Admin">Admin</option>
  					  <option value="IT">IT</option>
  					  <option value="Engineering">Engineering</option>
  					</select>
  				  </div>
  				</div>

  				<div className="form-group">
  				  <label className="col-md-3 control-label" htmlFor="description">Description</label>
  				  <div className="col-md-6">
  					<textarea name="description" id="description" rows="10" placeholder="Description" className="form-control" ref="description" value={this.state.description} onChange={this.onFromInputChange} />
  				  </div>
  				</div>
  			</fieldset>

  			<h4>Location</h4>
  			<div className="form-spacer" ></div>
  			<fieldset className="form-fields">
  				<div className="form-group">
  				  <label className="col-md-3 control-label" htmlFor="country">Country</label>
  				  <div className="col-md-6">
  					<select id="country" name="country" ref="country" className="form-control" onChange={this.onFromInputChange} defaultValue={this.state.country}>
  					  <option value="Germany">GER</option>
  					  <option value="Usa">US</option>
  					  <option value="Tunisia">TN</option>
  					  <option value="India">INDIA</option>
  					</select>
  				  </div>
  				</div>

  				<div className="form-group">
  				  <label className="col-md-3 control-label" htmlFor="city">City</label>
  				  <div className="col-md-6">
  					<select id="city" name="city" ref="city" className="form-control" onChange={this.onFromInputChange}  defaultValue={this.state.city}>
  					  <option value="Stuttgart">Stuttgart</option>
  					  <option value="Wolsburg">Wolsburg</option>
  					  <option value="Munich">Munich</option>
  					</select>
  				  </div>
  				</div>

  			</fieldset>

  			<h4>Duration</h4>
  			<div className="form-spacer" ></div>
  			<fieldset className="form-fields">
  				<div className="form-group">
  				  <label className="col-md-3 control-label" htmlFor="startdate">Start Date</label>
  				  <div className="col-md-6">
  					<div className="input-group date">
            <DateTimeField inputFormat="YYYY-MM-DD" format="YYYY-MM-DD" viewMode="days" mode="date"  dateTime={this.state.startDate} minDate={moment()} maxDate={moment().add(2, 'months')} onChange={this.onStartDateChange} />
  					</div>
  				  </div>
  				</div>

  				<div className="form-group">
  				  <label className="col-md-3 control-label" htmlFor="period">Period</label>
  				  <div className="col-md-6">
  					<select id="period" name="period" ref="period" className="form-control" onChange={this.onFromInputChange} defaultValue={this.state.period}>
  					  <option value="Short Term">Short Term</option>
  					  <option value="Mid Term">Mid Term</option>
  					  <option value="Long Term">Long Term</option>
  					</select>
  				  </div>
  				</div>
  			</fieldset>

  			<h4>Skills</h4>
  			<div className="form-spacer" ></div>
  			<fieldset className="form-fields">
  				<div className="form-group">
  					<label className="col-md-3 control-label"></label>
  					<div className="col-md-6">
  						<input data-role="tagsinput" id="skills" name="skills" type="text" className="form-control input-md" required="" ref="skills" value={this.state.skills} onChange={this.onFromInputChange}/>
  					</div>
  				</div>
  			</fieldset>

  			<h4>Project Probability</h4>
  			<div className="form-spacer" ></div>
  			<fieldset className="form-fields">
  				<div className="form-group">
  				  <label className="col-md-3 control-label" htmlFor="probability">Probability</label>
  				  <div className="col-md-6">
  					<select id="probability" name="probability" ref="probability" className="form-control" onChange={this.onFromInputChange}>
  					  <option value="Customer Inquiry">Customer Inquiry</option>
  					  <option value="PO Existing">PO Existing</option>
  					</select>
  				  </div>
  				</div>
  			</fieldset>

  			<div className="clearfix">
  				<div className="pull-right">
  					<button type="button" className="btn btn-primary" onClick={this.publish}>Publish</button>
  				</div>
  			</div>
  		</form>
      </div>
    );
  },

  onFromInputChange : function(event){
      var visibility = ReactDOM.findDOMNode(this.refs.visibilityInter).checked ? "Internal" : "External";
      var anu = ReactDOM.findDOMNode(this.refs.anuYes).checked ? "Yes" : "No";
      this.setState({
          title: ReactDOM.findDOMNode(this.refs.title).value,
          link: ReactDOM.findDOMNode(this.refs.link).value,
          salesManager: ReactDOM.findDOMNode(this.refs.salesManager).value,
          hrResponsible: ReactDOM.findDOMNode(this.refs.hrResponsible).value,
          teamLeader: ReactDOM.findDOMNode(this.refs.teamLeader).value,
          visibility: visibility,
          anu: anu,
          employer: ReactDOM.findDOMNode(this.refs.employer).value,
          category: ReactDOM.findDOMNode(this.refs.category).value,
          description: ReactDOM.findDOMNode(this.refs.description).value,
          country: ReactDOM.findDOMNode(this.refs.country).value,
          city: ReactDOM.findDOMNode(this.refs.city).value,
          period: ReactDOM.findDOMNode(this.refs.period).value,
          skills: ReactDOM.findDOMNode(this.refs.skills).value,
          probability: ReactDOM.findDOMNode(this.refs.probability).value
      });
  },

  onStartDateChange: function(date) {
    this.setState({startDate: date});
  },

  publish : function() {
    ProjectActions.addOffer(this.state);
  },

  onChange: function(event, data) {
    switch (event) {
      case 'offerAdded':
      this.context.router.push('/Offer/' + data);
      break;

      default:
    }
  }


});
export default JobForm;
