import React from 'react';
import FormInput from './FormInput';

var SignInWidget = React.createClass({

  render : function(){
    return (
    <center>
				<div className="navbar-collapse collapse" id="navbar-main">
					<form className="navbar-form navbar-right" role="search">
            <FormInput name="username" placeholder="Username" />
            <FormInput name="password" placeholder="Password" />
						<button type="submit" className="btn btn-default">Sign In</button>
					</form>
				</div>
			</center>
    );
  }
});

export default SignInWidget;
