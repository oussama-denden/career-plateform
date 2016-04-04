import React from 'react';
import NavBar from './NavBar';
import PageContent from './PageContent';
import Footer from './Footer';

var AppView = React.createClass({

  render : function () {
    return (
      <div>
        <NavBar isLogin={false}/>
        <div className="container" >
          {this.props.children}
        <Footer text="Copyright &copy; Your Website 2016" />
      </div>
      <hr />
    </div>
    );
  },



});
export default AppView;
