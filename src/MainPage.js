import React from "react";
import { Link } from "react-router";



export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 68
    };

    this.error = {};

    this.inputChange = this.inputChange.bind(this);
    this.buttonChangeSignIN = this.buttonChangeSignIN.bind(this);
    this.buttonChangeSignUP = this.buttonChangeSignUP.bind(this);
    this.buttonChangeSubscribe = this.buttonChangeSubscribe.bind(this);
  }

  inputChange(event) {

  }

  buttonChangeSignIN(event) {

  }

  buttonChangeSignUP() {

  }

  buttonChangeSubscribe() {

  }

  render() {
    let photosInTheFirstColumn = [];
    for (let i = 1; i <= this.state.count; i+=4) {
      photosInTheFirstColumn.push(
        <div className="img-margin">
          <a href="#">
            <img src={"images/photos/" + i + ".jpg"} className="img-rounded" width="100%" alt="" />
          </a>
        </div>
      )
    }

    let photosInTheSecondColumn = [];
    for (let i = 2; i <= this.state.count; i+=4) {
      photosInTheSecondColumn.push(
        <div className="img-margin">
          <a href="#">
            <img src={"images/photos/" + i + ".jpg"} className="img-rounded" width="100%" alt="" />
          </a>
        </div>
      )
    }

    let photosInTheThirdColumn = [];
    for (let i = 3; i <= this.state.count; i+=4) {
      photosInTheThirdColumn.push(
        <div className="img-margin">
          <a href="#">
            <img src={"images/photos/" + i + ".jpg"} className="img-rounded" width="100%" alt="" />
          </a>
        </div>
      )
    }

    let photosInTheFourthColumn = [];
    for (let i = 4; i <= this.state.count; i+=4) {
      photosInTheFourthColumn.push(
        <div className="img-margin">
          <a href="#">
            <img src={"images/photos/" + i + ".jpg"} className="img-rounded" width="100%" alt="" />
          </a>
        </div>
      )
    }

    return (
      <div>
        <div className="first-container">
          <div className="container">
            <div className="row">

              <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
                <h1 className="text-center">Something</h1>
              </div>

              <div className="col-lg-2 col-md-2 col-sm-hidden col-xs-hidden"></div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">

                <br />

                <form>
                  <div className="input-group has-warning">
                    <input type="text" className="form-control" placeholder="Search" />

                    <div className="input-group-btn">
                      <button className="btn btn-default btn-warning" type="submit">
                        <span className="glyphicon glyphicon-search" />
                      </button>
                    </div>
                  </div>
                </form>

              </div>

              <div className="col-lg-1 col-md-1 col-sm-hidden col-xs-hidden"></div>

              <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">

                <br />

                <div className="row">

                  <Link to="/registration">
                    <div className="col-lg-7 col-md-6 col-sm-6 col-xs-6">
                      <button className="btn btn-block btn-success" type="submit">Sign UP <span className="glyphicon glyphicon-user" /></button>
                    </div>
                  </Link>

                  <Link to="/login">
                    <div className="col-lg-5 col-md-6 col-sm-6 col-xs-6">
                      <button className="btn btn-block btn-danger" type="submit">Login <span className="glyphicon glyphicon-log-in" /></button>
                    </div>
                  </Link>
                </div>
              </div>

            </div>
          </div>

          <br />
        </div>

        <div className="second-container">
          <br />
            <div className="container">
              <div className="row">

                <div className="col-lg-2 col-md-2 col-sm-2"></div>

                <div className="col-lg-2 col-md-2 col-sm-2">
                  <img src="images/cover.jpg" alt="Night Lovell" className="img-circle" width="100%" />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <h3 className="text-center">Name Surname</h3>
                  <ul className="list-inline text-center">
                    <li>Subscribers <span className="label label-warning">50</span></li>
                    <li>Followers <span className="label label-success">17</span></li>
                    <li>Photos <span className="label label-danger">6</span></li>
                  </ul>
                  <h1 className="text-center">
                    <button className="btn btn-primary" type="submit">Subscribe</button>
                  </h1>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-2"></div>

              </div>
            </div>
            <br />
        </div>

        <div className="last">
          <div className="container">
            <div className="row">

              <div className="col-md-3 col-sm-3 col-xs-3">
                {photosInTheFirstColumn}
              </div>

              <div className="col-md-3 col-sm-3 col-xs-3">
                {photosInTheSecondColumn}
              </div>

              <div className="col-md-3 col-sm-3 col-xs-3">
                {photosInTheThirdColumn}
              </div>

              <div className="col-md-3 col-sm-3 col-xs-3">
                {photosInTheFourthColumn}
              </div>

            </div>
          </div>
        </div>

        <div className="footer">
          <div className="container">
            <h3 className="text-right has-error">footer</h3>
          </div>
        </div>

      </div>
    );
  }
}