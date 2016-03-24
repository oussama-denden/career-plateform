import React from 'react';
import NavBar from './NavBar';
import PageContent from './PageContent';

var AppView = React.createClass({

  render : function () {
    return (
      <div>
        <NavBar />
        <PageContent />
      </div>
    );
  }

});
export default AppView;
