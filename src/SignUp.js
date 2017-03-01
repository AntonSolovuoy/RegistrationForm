import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class SignUp extends React.Component {

	button(event) {
		event.preventDefault();

		const props = this.props;

		if(!! (this.firstName.value && this.lastName.value && this.eMail.value && this.password.value)) {
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
			case 'firstName' : {
				props.onFirstNameInput(this.firstName.value); break;
			}

			case 'lastName' : {
				props.onLastNameInput(this.lastName.value); break;
			}

			case 'year' : {
				props.onYearInput(this.year.optionYears.value); break;
			}

			case 'month' : {
				props.onMonthInput(this.month.option); break;
			}

			case 'day' : {
				props.onDayInput(this.day.option); break;
			}

			case 'eMail' : {
				props.onEMailInput(this.eMail.value); break;
			}

			case 'password' : {
				props.onPasswordInput(this.password.value); break;
			}

			default : {
				console.log('Error in input...')
			}
		}

		if (this.firstName.value && this.lastName.value) {
			props.onIsShowDate(true);
		} else {
			props.onIsShowDate(false);
		}

	/*	if (this.year.value && this.month.value && this.day.value) {
			props.onIsShowSex(true);
		} else {
			props.onIsShowSex(false);
		}*/
	}

	render() {
		console.log(this.props.store);

		this.input = this.input.bind(this);
		this.button = this.button.bind(this);

		const signUp = this.props.store.signUp;

		let optionYears = [];
		for (let i = 1900; i <= 2017; i++) {
			optionYears.push(
				<option value={i} key={i}>{i}</option>
			);
		}

		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];

		const currentMonth = signUp.month;
		const currentYear = signUp.year;

		let optionMonths = [];
		for (let i = 0; i <= 11; i++) {
			optionMonths.push(
				<option value={months[i]} key={i}>{months[i]}</option>
			);
		}

		let countDays;
		if (currentMonth === months[1] &&
			currentYear % 4 === 0) {
			countDays = 28;
		} else if (currentMonth === months[1] &&
			currentYear % 4 !== 0) {
			countDays = 29;
		} else if (currentMonth === months[3] ||
			currentMonth === months[5] ||
			currentMonth === months[8] ||
			currentMonth === months[10]) {
			countDays = 30;
		} else {
			countDays = 31;
		}

		let optionDays = [];
		for (let i = 1; i <= countDays; i++) {
			optionDays.push(
				<option value={i} key={i}>{i}</option>
			);
		}

		let dateBlock = null;
		if (signUp.isShowDate) {
			dateBlock = (
				<div className="form-group"><label htmlFor="dateOfBirth">Date of birth:</label>
					<div className="controls" id="dateOfBirth">
						<div className="row">

							<div className="col-lg-4 col-md-4 col-sm-4">
								<select className="selectpicker form-control" name='year'
									onChange={this.input} value={(input) => { this.year = input }} >
									<option value="Year">Year</option>
									{optionYears}
								</select>
							</div>

							<div className="col-lg-4 col-md-4 col-sm-4">
								<select className="selectpicker form-control" name='month'
									onChange={this.input} value={(input) => { this.month = input }} >
									<option value="Month">Month</option>
									{optionMonths}
								</select>
							</div>

							<div className="col-lg-4 col-md-4 col-sm-4">
								<select className="selectpicker form-control" name='day'
									onChange={this.input} value={(input) => { this.dayName = input }} >
									<option value="Day">Day</option>
									{optionDays}
								</select>
							</div>

						</div>
					</div>
				</div>
			);
		}

		let sexBlock = null;
		if (signUp.isShowSex) {
			sexBlock = (
				<div className="form-group"><label htmlFor="radios">Sex:</label>
					<div id="radios">
						<label className="radio-inline">
							<input type="radio" name="sex" id="male" value="male"
								onChange={this.input} checked={signUp.sex === "male"} />
							Male
						</label>

						<label className="radio-inline">
							<input type="radio" name="sex" id="female" value="female"
								onChange={this.input} checked={signUp.sex === "female"} />
							Female
						</label>
					</div>
				</div>
			);
		}

		let successBlock = null;
		if (signUp.isSuccess) {
			successBlock = (
				<div className="alert alert-success">Registration success</div>
			);
		}

		let failedBlock = null;
		if (signUp.isFailed) {
			failedBlock = (
				<div className="alert alert-danger">Registration failed</div>
			);
		}

		const divBlock = <div className="col-lg-3 col-md-3 col-sm-2 col-xs-2"></div>;

		return (
			<div>
				<h1 className="text-center sign-up">Sign Up</h1>

				<div className="container">
					{divBlock}

					<div className="col-lg-6 col-md-6 col-sm-8 col-xs-8">

						<div className="form-group"><label htmlFor="firstName">Name:</label>
							<input type="text" className="form-control" name='firstName' placeholder="Ivan"
								onChange={this.input} ref={(input) => { this.firstName = input }} />
						</div>

						<div className="form-group"><label htmlFor="lastName">Surname:</label>
							<input type="text" className="form-control" name='lastName' placeholder="Ivanov"
								onChange={this.input} ref={(input) => { this.lastName = input }} />
						</div>

						{dateBlock}

						{sexBlock}

						<div className="form-group"><label htmlFor="eMail">Mail:</label>
							<div className="input-group">
								<span className="input-group-addon">@</span>
								<input type="text" className="form-control" name='eMail' id="eMail" placeholder="i.ivanov@mail.ru"
									onChange={this.input} ref={(input) => { this.eMail = input }} />
							</div>
						</div>

						<div className="form-group"><label htmlFor="password">Password:</label>
							<input type="password" className="form-control" name='password' id="password"
								onChange={this.input} ref={(input) => { this.password = input }} />
						</div>

						<div className="row">
							<form className="col-lg-8 col-md-8 col-sm-6"
								onSubmit={this.button}>
								<button className="btn btn-success navbar-btn btn-block">Sign UP</button>
							</form>

							<Link to="/login">
								<form className="col-lg-4 col-md-4 col-sm-6">
									<button className="btn btn-danger navbar-btn btn-block">Cancel</button>
								</form>
							</Link>

						</div>

						{successBlock}

						{failedBlock}

					</div>

					{divBlock}
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
		onFirstNameInput: (firstName) => {
			dispatch({ type: 'firstName', firstName });
		},

		onLastNameInput: (lastName) => {
			dispatch({ type: 'lastName', lastName });
		},

		onYearInput: (year) => {
			dispatch({ type: 'year', year });
		},

		onMonthInput: (month) => {
			dispatch({ type: 'month', month });
		},

		onDayInput: (day) => {
			dispatch({ type: 'day', day });
		},

		onEMailInput: (eMail) => {
			dispatch({ type: 'eMail', eMail });
		},

		onPasswordInput: (password) => {
			dispatch({ type: 'password', password });
		},

		onIsShowDate: (isShowDate) => {
			dispatch({ type: 'isShowDate', isShowDate });
		},

		onIsShowSex: (isShowSex) => {
			dispatch({ type: 'isShowSex', isShowSex });
		},

		onIsSuccess: (isSuccess) => {
			dispatch({ type: 'isSuccess', isSuccess });
		},

		onIsFailed: (isFailed) => {
			dispatch({ type: 'isFailed', isFailed });
		}
	})
)(SignUp);
