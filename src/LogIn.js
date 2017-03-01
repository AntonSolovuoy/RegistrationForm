import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class LogIn extends React.Component {

	button(event) {
		event.preventDefault();

		const props = this.props;

		if (!! (this.logInEMail.value && this.logInPassword.value)) {
			props.onIsSuccess(true);
			props.onIsFailed(false);
		} else {
			props.onIsSuccess(false);
			props.onIsFailed(true);
		}
	}

	input (event) {
		event.preventDefault();

		const props = this.props;

		switch (event.target.name) {
			case 'logInEMail' : {
				props.onEMailInput(this.logInEMail.value); break;
			}

			case 'logInPassword' : {
				props.onPasswordInput(this.logInPassword.value); break;
			}

			case 'logInIsRemember' : {
				break;
			}
		}
	}

	render() {
		console.log(this.props.store);

		this.input = this.input.bind(this);
		this.button = this.button.bind(this);

		const logIn = this.props.store.logIn;

		let successBlock = null;
		if (logIn.logInIsSuccess) {
			successBlock = (
				<div className="alert alert-success">Log In success</div>
			);
		}

		let failedBlock = null;
		if (logIn.logInIsFailed) {
			failedBlock = (
				<div className="alert alert-danger">Log In failed</div>
			);
		}

		const divBlock = <div className="col-lg-2 col-md-3 col-sm-3"></div>;

		return (
			<div>

				<div className="container">
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>

					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
						<img src="images/avatar.jpg" alt="Night Lovell" className="img-circle img-responsive" />
					</div>

					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
				</div>

				<h1 className="text-center sign-in">Log In</h1>

				<div className="container">

					<div className="col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>

					<div className="col-lg-8 col-md-8 col-sm-10 col-xs-10">

						<div className="form-horizontal">

							<div className="form-group">
								<label htmlFor="mail" className="col-lg-2 col-md-3 col-sm-3 control-label">Mail:</label>

								<div className="col-lg-8 col-md-6 col-sm-6">
									<input className="form-control" name='logInEMail' placeholder="i.ivanov@mail.ru"
										onChange={this.input} ref={(input) => { this.logInEMail = input }} />
								</div>

								{divBlock}
							</div>

							<div className="form-group">
								<label htmlFor="password" className="col-lg-2 col-md-3 col-sm-3 control-label">Password:</label>

								<div className="col-lg-8 col-md-6 col-sm-6">
									<input type="password" className="form-control" name='logInPassword'
										onChange={this.input} ref={(input) => { this.logInPassword = input }} />
								</div>

								{divBlock}
							</div>

							<div className="form-group">
								{divBlock}

								<div className="col-lg-10 col-md-9 col-sm-9">
									<div className="checkbox">
										<label>
											<input type="checkbox" name='logInIsRemember'
												onChange={this.input} checked={true} />
												Remember me
										</label>
									</div>
								</div>
							</div>

							<div className="form-group">
								{divBlock}

								<form className="col-lg-5 col-md-3 col-sm-3 col-xs-12"
									onSubmit={this.button}>
									<button className="btn btn-danger navbar-btn btn-block">Log In</button>
								</form>

								<Link to="/registration">
									<from className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
										<button className="btn btn-success navbar-btn btn-block">Sign Up</button>
									</from>
								</Link>

								{divBlock}
							</div>
						</div>

						<div className="row">
							{divBlock}

							<div className="col-lg-8 col-md-6 col-sm-6">
								{successBlock}

								{failedBlock}
							</div>

							{divBlock}
						</div>

					</div>

					<div className="col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		store: state
	}),

	dispatch => ({
		onEMailInput: (logInEMail) => {
			dispatch({ type: 'logInEMail', logInEMail });
		},

		onPasswordInput: (logInPassword) => {
			dispatch({ type: 'logInPassword', logInPassword });
		},

		onIsSuccess: (logInIsSuccess) => {
			dispatch({ type: 'logInIsSuccess', logInIsSuccess });
		},

		onIsFailed: (logInIsFailed) => {
			dispatch({ type: 'logInIsFailed', logInIsFailed });
		}
	})
)(LogIn);
