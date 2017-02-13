import React from "react";
import { Link } from "react-router";

export default class SignIN extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mail: "",
      password: "",
      isRemember: false,

      isSuccess: false,
      isFailed: false,

      isSignIN: true
    };

    this.error = {};

    this.inputChange = this.inputChange.bind(this);
    this.buttonChangeSignIN = this.buttonChangeSignIN.bind(this);
    this.buttonChangeSignUP = this.buttonChangeSignUP.bind(this);
  }

  inputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  static isValidate(state) {
    const mail = state.mail,
      password = state.password;

    return !! (mail && password);
  }

  buttonChangeSignIN(event) {
    const state = this.state;

    if (SignIN.isValidate(state)) {
      for (let name in state) {
        if (state.hasOwnProperty(name)) {
          this.error[name] = "has-success";
        }
      }

      this.setState({
        isSuccess: true,
        isFailed: false
      });

      this.setState({
        isSignIN: true
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

      this.setState({
        isSignIN: false
      });
    }

    event.preventDefault();
  }

  buttonChangeSignUP() {

  }

  render() {
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
        <br/>

        <div className="container">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <div>
              <img src="img/cover.jpg" alt="Night Lovell" className="img-circle img-responsive" />
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
        </div>

        <h1 className="text-center sign-in">Sign IN</h1>

        <div className="container">

          <div className="col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>

          <div className="col-lg-8 col-md-8 col-sm-10 col-xs-10">

            <form className="form-horizontal">

              <div className="form-group">
                <label htmlFor="mail" className="col-lg-2 col-md-3 col-sm-3 control-label">Mail:</label>
                <div className="col-lg-8 col-md-6 col-sm-6">
                  <div className={this.error.mail}>
                    <input className="form-control" id="mail" name="mail" value={this.state.mail} onChange={this.inputChange} placeholder="i.ivanov@mail.ru" />
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-3"></div>
              </div>

              <div className="form-group">
                <label htmlFor="password" className="col-lg-2 col-md-3 col-sm-3 control-label">Password:</label>
                <div className="col-lg-8 col-md-6 col-sm-6">
                  <div className={this.error.password}>
                    <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.inputChange} />
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-3"></div>
              </div>

              <div className="form-group">
                <div className="col-lg-2 col-md-3 col-sm-3"></div>
                <div className="col-lg-10 col-md-9 col-sm-9">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" name="isRemember" checked={this.state.isRemember} onChange={this.inputChange} />Remember me
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="col-lg-2 col-md-3 col-sm-3"></div>

                <form className="col-lg-5 col-md-3 col-sm-3 col-xs-12" onSubmit={this.buttonChangeSignIN}>
                  <button type="submit" className="btn btn-danger navbar-btn btn-block">Sign IN</button>
                </form>

                <Link to="/registration">
                  <from className="col-lg-3 col-md-3 col-sm-3 col-xs-12" onSubmit={this.buttonChangeSignUP}>
                      <button type="submit" className="btn btn-success navbar-btn btn-block">Sign UP</button>
                  </from>
                </Link>

                <div className="col-lg-2 col-md-3 col-sm-3"></div>
              </div>
            </form>

            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-3"></div>
              <div className="col-lg-8 col-md-6 col-sm-6">
                {successBlock}

                {failedBlock}
              </div>
              <div className="col-lg-2 col-md-3 col-sm-3"></div>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>
        </div>
      </div>
    );
  }
}