import React from "react";
import { Link } from "react-router";

export default class MainFrame extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.error = {};

		this.inputChangeSearch = this.inputChangeSearch.bind(this);
		this.buttonChangeLogIN = this.buttonChangeLogIN.bind(this);
		this.buttonChangeSignUP = this.buttonChangeSignUP.bind(this);
	}

	inputChangeSearch(event) {}

	buttonChangeLogIN(event) {}

  buttonChangeSignUP(event) {}

	render() {

		return (
			<div>
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
										<input type="text" className="form-control" placeholder="Search" />

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
										<form className="col-lg-6 col-md-6 col-sm-6 col-xs-6" onSubmit={this.buttonChangeLogIN()}>
											<button className="btn btn-block btn-danger" type="submit">Login <span className="glyphicon glyphicon-log-in" /></button>
										</form>
									</Link>

									<Link to="/registration">
										<form className="col-lg-6 col-md-6 col-sm-6 col-xs-6" onSubmit={this.buttonChangeSignUP()}>
											<button className="btn btn-block btn-success" type="submit">Sign UP <span className="glyphicon glyphicon-user" /></button>
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