import React from "react";
import { Link } from "react-router";

export default class SignUP extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      year: "",
      month: "",
      day: "",
      sex: "",
      mail: "",
      password: "",

      isShowDate: false,
      isShowSex: false,

      isSuccess: false,
      isFailed: false,

      isSignUP: false
    };

    this.error = {};

    this.inputChange = this.inputChange.bind(this);
    this.buttonChangeSignUP = this.buttonChangeSignUP.bind(this);
    this.buttonChangeCancel = this.buttonChangeCancel.bind(this);
  }

  inputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });

    if (this.state.firstName && this.state.lastName) {
      this.setState({
        isShowDate: true
      });
    } else {
      this.setState({
        isShowDate: false
      });
    }

    if (this.state.year && this.state.month && this.state.day) {
      this.setState({
        isShowSex: true
      });
    } else {
      this.setState({
        isShowSex: false
      });
    }
  }

  static isValidate(state) {
    const firstName = state.firstName,
      lastName = state.lastName,
      mail = state.mail,
      password = state.password;

    return !! (firstName && lastName && mail && password);
  }

  buttonChangeSignUP(event) {
    const state = this.state;

    if (SignUP.isValidate(state) === true) {

      for (let name in state) {
        if (state[name] && state.hasOwnProperty(name)) {
          this.error[name] = "has-success";
        }
      }

      this.setState({
        isSuccess: true,
        isFailed: false
      });
    } else {

      for (let name in state) {
        if (!state[name] && state.hasOwnProperty(name)) {
          this.error[name] = "has-error";
        } else {
          this.error[name] = "has-success";
        }
      }

      this.setState({
        isSuccess: false,
        isFailed: true
      });
    }

    event.preventDefault();
  }

  buttonChangeCancel() {}

  render() {
    let optionYears = [];
    for (let i = 1900; i < 2018; i++) {
      optionYears.push(
        <option value={"year-" + i}>{i}</option>
      );
    }

    let optionDays = [];
    for (let i = 1; i < 32; i++) {
      optionDays.push(
        <option value={"day-" + i}>{i}</option>
      );
    }

    let dateBlock = null;
    if (this.state.isShowDate) {
      dateBlock = (
        <div className="form-group"><label htmlFor="dateOfBirth">Date of birth:</label>
          <div className="controls" id="dateOfBirth">
            <div className="row">

              <div className={this.error.year}>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <select className="selectpicker form-control" name="year" value={this.state.year} onChange={this.inputChange}>
                    <option value="Year">Year</option>
                    {optionYears}
                  </select>
                </div>
              </div>

              <div className={this.error.month}>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <select className="selectpicker form-control" name="month" value={this.state.month} onChange={this.inputChange}>
                    <option value="Month">Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>
              </div>

              <div className={this.error.day}>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <select className="selectpicker form-control" name="day" value={this.state.day} onChange={this.inputChange}>
                    <option value="Day">Day</option>
                    {optionDays}
                  </select>
                </div>
              </div>

            </div>
          </div>
        </div>
      );
    }

    let sexBlock = null;
    if (this.state.isShowSex) {
      sexBlock = (
        <div className="form-group"><label htmlFor="radios">Sex:</label>
          <div className={this.error.sex}>
            <div id="radios">
              <label className="radio-inline">
                <input type="radio" name="sex" id="male"
                       value="male"
                       onChange={this.inputChange}
                       checked={this.state.sex === "male"} />
                Male
              </label>

              <label className="radio-inline">
                <input type="radio" name="sex" id="female"
                       value="female"
                       onChange={this.inputChange}
                       checked={this.state.sex === "female"} />
                Female
              </label>
            </div>
          </div>
        </div>
      );
    }

    let successBlock = null;
    if (this.state.isSuccess) {
      successBlock = (
        <div className="alert alert-success">Registration success</div>
      );
    }

    let failedBlock = null;
    if (this.state.isFailed) {
      failedBlock = (
        <div className="alert alert-danger">Registration failed</div>
      );
    }

    return (
      <div>
        <br />

        <h1 className="text-center sign-up">Sign up</h1>

        <div className="container">
          <div className="col-lg-3 col-md-3 col-sm-2 col-xs-2"></div>

          <div className="col-lg-6 col-md-6 col-sm-8 col-xs-8">
            <form>

              <div className="form-group"><label htmlFor="firstName">Name:</label>
                <div className={this.error.firstName}>
                  <input type="text" className="form-control" placeholder="Ivan" id="firstName" name="firstName" value={this.state.firstName} onChange={this.inputChange} />
                </div>
              </div>

              <div className="form-group"><label htmlFor="lastName">Surname:</label>
                <div className={this.error.lastName}>
                  <input type="text" className="form-control" placeholder="Ivanov" id="lastName" name="lastName" value={this.state.lastName} onChange={this.inputChange} />
                </div>
              </div>

              {dateBlock}

              {sexBlock}

              <div className="form-group"><label htmlFor="mail">Mail:</label>
                <div className="input-group">
                  <span className="input-group-addon">@</span>
                  <div className={this.error.mail}>
                    <input type="text" className="form-control" placeholder="i.ivanov@mail.ru" id="mail" name="mail" value={this.state.mail} onChange={this.inputChange} />
                  </div>
                </div>
              </div>

              <div className="form-group"><label htmlFor="password">Password:</label>
                <div className={this.error.password}>
                  <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.inputChange} />
                </div>
              </div>

              <div className="row">
                <form className="col-lg-8 col-md-8 col-sm-6" onSubmit={this.buttonChangeSignUP}>
                  <button type="submit" className="btn btn-success navbar-btn btn-block">Sign up</button>
                </form>

                <Link to="/">
                  <form className="col-lg-4 col-md-4 col-sm-6" onSubmit={this.buttonChangeCancel}>
                    <button type="submit" className="btn btn-danger navbar-btn btn-block">Cancel</button>
                  </form>
                </Link>

              </div>

            </form>

            {successBlock}

            {failedBlock}

          </div>

          <div className="col-lg-3 col-md-3 col-sm-2 col-xs-2"></div>
        </div>
      </div>
    );
  }
}