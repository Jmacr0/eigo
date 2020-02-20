import React, { Component } from 'react';

class SignUp extends Component {
	state = {}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8 mx-auto">
						<form action="/api/user/new" className="shadow-sm">
							<div className="p-3">
								<div className="form-group">
									<label htmlFor="username">Username</label>
									<input type="text" className="form-control" />
								</div>
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input type="email" className="form-control" />
								</div>
								<div className="form-group">
									<label htmlFor="password">Password</label>
									<input type="password" className="form-control" />
								</div>
								<div className="form-group">
									<label htmlFor="passwordConfirm">Confirm Password</label>
									<input type="password" className="form-control" />
								</div>
							</div>
							<button type="submit" className="btn btn-primary btn-block rounded-0">Register</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUp;