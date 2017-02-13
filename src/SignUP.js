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
                    <option value="year-1901">1901</option>
                    <option value="year-1902">1902</option>
                    <option value="year-1903">1903</option>
                    <option value="year-1904">1904</option>
                    <option value="year-1905">1905</option>
                    <option value="year-1906">1906</option>
                    <option value="year-1907">1907</option>
                    <option value="year-1908">1908</option>
                    <option value="year-1909">1909</option>
                    <option value="year-1910">1910</option>
                    <option value="year-1911">1911</option>
                    <option value="year-1912">1912</option>
                    <option value="year-1913">1913</option>
                    <option value="year-1914">1914</option>
                    <option value="year-1915">1915</option>
                    <option value="year-1916">1916</option>
                    <option value="year-1917">1917</option>
                    <option value="year-1918">1918</option>
                    <option value="year-1919">1919</option>
                    <option value="year-1920">1920</option>
                    <option value="year-1921">1921</option>
                    <option value="year-1922">1922</option>
                    <option value="year-1923">1923</option>
                    <option value="year-1924">1924</option>
                    <option value="year-1925">1925</option>
                    <option value="year-1926">1926</option>
                    <option value="year-1927">1927</option>
                    <option value="year-1928">1928</option>
                    <option value="year-1929">1929</option>
                    <option value="year-1930">1930</option>
                    <option value="year-1931">1931</option>
                    <option value="year-1932">1932</option>
                    <option value="year-1933">1933</option>
                    <option value="year-1934">1934</option>
                    <option value="year-1935">1935</option>
                    <option value="year-1936">1936</option>
                    <option value="year-1937">1937</option>
                    <option value="year-1938">1938</option>
                    <option value="year-1939">1939</option>
                    <option value="year-1940">1940</option>
                    <option value="year-1941">1941</option>
                    <option value="year-1942">1942</option>
                    <option value="year-1943">1943</option>
                    <option value="year-1944">1944</option>
                    <option value="year-1945">1945</option>
                    <option value="year-1946">1946</option>
                    <option value="year-1947">1947</option>
                    <option value="year-1948">1948</option>
                    <option value="year-1949">1949</option>
                    <option value="year-1950">1950</option>
                    <option value="year-1951">1951</option>
                    <option value="year-1952">1952</option>
                    <option value="year-1953">1953</option>
                    <option value="year-1954">1954</option>
                    <option value="year-1955">1955</option>
                    <option value="year-1956">1956</option>
                    <option value="year-1957">1957</option>
                    <option value="year-1958">1958</option>
                    <option value="year-1959">1959</option>
                    <option value="year-1960">1960</option>
                    <option value="year-1961">1961</option>
                    <option value="year-1962">1962</option>
                    <option value="year-1963">1963</option>
                    <option value="year-1964">1964</option>
                    <option value="year-1965">1965</option>
                    <option value="year-1966">1966</option>
                    <option value="year-1967">1967</option>
                    <option value="year-1968">1968</option>
                    <option value="year-1969">1969</option>
                    <option value="year-1970">1970</option>
                    <option value="year-1971">1971</option>
                    <option value="year-1972">1972</option>
                    <option value="year-1973">1973</option>
                    <option value="year-1974">1974</option>
                    <option value="year-1975">1975</option>
                    <option value="year-1976">1976</option>
                    <option value="year-1977">1977</option>
                    <option value="year-1978">1978</option>
                    <option value="year-1979">1979</option>
                    <option value="year-1980">1980</option>
                    <option value="year-1981">1981</option>
                    <option value="year-1982">1982</option>
                    <option value="year-1983">1983</option>
                    <option value="year-1984">1984</option>
                    <option value="year-1985">1985</option>
                    <option value="year-1986">1986</option>
                    <option value="year-1987">1987</option>
                    <option value="year-1988">1988</option>
                    <option value="year-1989">1989</option>
                    <option value="year-1990">1990</option>
                    <option value="year-1991">1991</option>
                    <option value="year-1992">1992</option>
                    <option value="year-1993">1993</option>
                    <option value="year-1994">1994</option>
                    <option value="year-1995">1995</option>
                    <option value="year-1996">1996</option>
                    <option value="year-1997">1997</option>
                    <option value="year-1998">1998</option>
                    <option value="year-1999">1999</option>
                    <option value="year-2000">2000</option>
                    <option value="year-2001">2001</option>
                    <option value="year-2002">2002</option>
                    <option value="year-2003">2003</option>
                    <option value="year-2004">2004</option>
                    <option value="year-2005">2005</option>
                    <option value="year-2006">2006</option>
                    <option value="year-2007">2007</option>
                    <option value="year-2008">2008</option>
                    <option value="year-2009">2009</option>
                    <option value="year-2010">2010</option>
                    <option value="year-2011">2011</option>
                    <option value="year-2012">2012</option>
                    <option value="year-2013">2013</option>
                    <option value="year-2014">2014</option>
                    <option value="year-2015">2015</option>
                    <option value="year-2016">2016</option>
                    <option value="year-2017">2017</option>
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
                    <option value="day-01">01</option>
                    <option value="day-02">02</option>
                    <option value="day-03">03</option>
                    <option value="day-04">04</option>
                    <option value="day-05">05</option>
                    <option value="day-06">06</option>
                    <option value="day-07">07</option>
                    <option value="day-08">08</option>
                    <option value="day-09">09</option>
                    <option value="day-10">10</option>
                    <option value="day-11">11</option>
                    <option value="day-12">12</option>
                    <option value="day-13">13</option>
                    <option value="day-14">14</option>
                    <option value="day-15">15</option>
                    <option value="day-16">16</option>
                    <option value="day-17">17</option>
                    <option value="day-18">18</option>
                    <option value="day-19">19</option>
                    <option value="day-20">20</option>
                    <option value="day-21">21</option>
                    <option value="day-22">22</option>
                    <option value="day-23">23</option>
                    <option value="day-24">24</option>
                    <option value="day-25">25</option>
                    <option value="day-26">26</option>
                    <option value="day-27">27</option>
                    <option value="day-28">28</option>
                    <option value="day-29">29</option>
                    <option value="day-30">30</option>
                    <option value="day-31">31</option>
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
