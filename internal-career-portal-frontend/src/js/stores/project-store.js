import Reflux from 'reflux';
import ProjectActions from '../actions/project-actions';
import ProjectService from '../services/project-service';

var ProjectStore = Reflux.createStore({
    listenables : [ProjectActions],
    getAllProjects : function () {
      ProjectService.get('/offer').then(function(data) {
        this.fireUpdate('allProjects', data);
      }.bind(this));
    },

    getProject : function(id){
      ProjectService.get('/offer/' + id).then(function(data){
        this.fireUpdate('oneProject', data);
      }.bind(this));
    },

    addOffer : function(data){
      ProjectService.post('/offer', data).then(function(offerId){
        this.fireUpdate('offerAdded', offerId);
      }.bind(this));
    },

    addReferral : function(offerId, data){
      ProjectService.post('/offer/' + offerId + '/referral', data).then(function(){
        this.fireUpdate('referralAdded');
      }.bind(this));
    },

    showInterest : function(offerId, data){
      ProjectService.post('/offer/' + offerId + '/interest', data).then(function(){
        this.fireUpdate('interestAdded');
      }.bind(this));
    },

    updateInterests : function(offerID) {
      ProjectService.get('/interest/' + offerID).then(function(data){
        this.fireUpdate('interestsCount', data.length);
      }.bind(this));
    },

    updateReferrals : function(offerID) {
      ProjectService.get('/referral/' + offerID).then(function(data){
        this.fireUpdate('referralsCount', data.length);
      }.bind(this));
    },

    getInterests : function(offerId){

    },

    fireUpdate : function (event, data) {
      this.trigger(event, data);
    }
});

export default ProjectStore;
