import React, { Component } from 'react'
import { Link } from 'react-router'

class MainFrame extends Component {
	constructor(props) {
		super(props);

		this.state = {
			search: ""
		};

		this.error = {};

		this.inputsChange = this.inputsChange.bind(this);
	}

	inputsChange(event) {}

	render() {

		return (
			<div key="MainFrame">
				<div className="first-container">
					<div className="container">
						<div className="row">

							<div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
								<br/>

								<h2 className="text-center">Something</h2>
							</div>

							<div className="col-lg-2 col-md-2 col-sm-hidden col-xs-hidden"></div>

							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
								<br/>

								<form>
									<div className="input-group">
										<input type="text" className="form-control" value={this.state.search} onChange={this.inputsChange} placeholder="Search" />

										<div className="input-group-btn">
											<button className="btn btn-warning" type="submit">
												<span className="glyphicon glyphicon-search" />
											</button>
										</div>
									</div>
								</form>
							</div>

							<div className="col-lg-1 col-md-1 col-sm-hidden col-xs-hidden"></div>

							<div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
								<br/>

								<div className="row">
									<Link to="/login">
										<form className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
											<button className="btn btn-block btn-danger">Log In <span className="glyphicon glyphicon-log-in" /></button>
										</form>
									</Link>

									<Link to="/registration">
										<form className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
											<button className="btn btn-block btn-success">Sign Up <span className="glyphicon glyphicon-user" /></button>
										</form>
									</Link>
								</div>

							</div>
						</div>
					</div>
				</div>

				<hr/>

				{this.props.children}

				<div className="footer">
					<h3 className="text-right has-error">footer</h3>
				</div>

			</div>
		);
	}
}

export default MainFrame;
