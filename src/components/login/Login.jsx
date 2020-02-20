import React, { Component } from 'react';

class Login extends Component {
	state = {}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8 mx-auto">
						<form action="/api/user/login" method="POST" className="shadow-sm">
							<div className="p-3">
								<div className="form-group">
									<label htmlFor="username">Username</label>
									<input type="text" name="username" className="form-control" />
								</div>
								<div className="form-group">
									<label htmlFor="password">Password</label>
									<input type="password" name="password" className="form-control" />
								</div>
							</div>
							<div className="m-3 text-center" style={{ cursor: "pointer" }}>New User? Sign Up Here</div>
							<button type="submit" className="btn btn-primary btn-block rounded-0">Login</button>
						</form>
					</div>
				</div>
			</div >
		);
	}
}

export default Login;