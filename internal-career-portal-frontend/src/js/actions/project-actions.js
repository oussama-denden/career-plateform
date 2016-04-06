import Reflux from 'reflux'

var ProjectActions = Reflux.createActions([
    'getAllProjects',
    'getProject',
    'addOffer',
    'addReferral',
    'showInterest',
    'updateInterests',
    'updateReferrals',
    'getInterests'
]);

export default ProjectActions;
