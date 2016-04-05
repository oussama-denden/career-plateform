import React from 'react';
import UserStore from '../../stores/user-store';
import UserActions from '../../actions/user-actions';

var LogoutWidget = React.createClass({

  getInitialState : function() {
    return UserStore.getUser();
  },

  render : function(){
    return (
      <center>
      <div className="collapse navbar-collapse" id="navbar-main">
				<ul className="nav navbar-nav navbar-right">
					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">
							<span className="glyphicon glyphicon-user"></span>
							<strong>{this.state.username}</strong>
							<span className="glyphicon glyphicon-chevron-down"></span>
						</a>
						<ul className="dropdown-menu">
							<li>
								<div className="navbar-login">
									<div className="row">
										<div className="col-lg-4">
											<p className="text-center">
												<span className="glyphicon glyphicon-user icon-size"></span>
											</p>
										</div>
										<div className="col-lg-8">
											<p className="text-left"><strong>{this.state.role}</strong></p>
											<p className="text-left small">{this.state.username}</p>
											<p className="text-left">
												<a href="#" className="btn btn-primary btn-block btn-sm">Edit Profil</a>
											</p>
										</div>
									</div>
								</div>
							</li>
							<li className="divider"></li>
							<li>
								<div className="navbar-login navbar-login-session">
									<div className="row">
										<div className="col-lg-12">
											<p>
												<button className="btn btn-danger btn-block" onClick={this.logout}>Logout</button>
											</p>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
    </center>
    );
  },

  logout: function() {
    UserActions.logout();
  }

});

export default LogoutWidget;
