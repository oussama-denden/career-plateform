import React from 'react';
import { hashHistory , Router, Route, IndexRoute} from 'react-router';
import AppView from './components/AppView';
import PageContent from './components/PageContent';
import AddOffer from './components/add-offer/AddOffer';
import ShowOffer from './components/show-offer-page/ShowOffer';
import LoginPage from './components/user/LoginPage';

var Routes = (
  <Router history={hashHistory }>
    <Route path="/" component={AppView} >
      <IndexRoute component={PageContent} />
      <Route path="/addOffer" component={AddOffer}/>
      <Route path="/Offer/:projectId" component={ShowOffer} />
    </Route>
    <Route path="/login/:loginAttempt" component={LoginPage} />
  </Router>
);

export default Routes;
