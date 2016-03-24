import React from 'react'
import Footer from './Footer';
import ProjectsLayout from './ProjectsLayout';

var PageContent = React.createClass({

  render : function(){
    return (
      <div className="container" >
        <header className="jumbotron hero-spacer">
          <h1>A Warm Welcome!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
          <p><a className="btn btn-primary btn-large">Call to action!</a>
          </p>
        </header>
        <hr />
        <ProjectsLayout />
        <hr />
        <Footer text="Copyright &copy; Your Website 2016" />
      </div>
    );
  }
});

export default PageContent;
