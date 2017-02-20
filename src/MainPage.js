import React from "react";

export default class MainPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			countFrames: 1,

      firstColumnHeight: 0,
      secondColumnHeight: 0,
      thirdColumnHeight: 0,
      fourthColumnHeight: 0,

      positions: [0],

			subscribers: 50,
			followers: 17,
			photos: 68
		};

		this.error = {};

		this.buttonChangeLogin = this.buttonChangeLogin.bind(this);
		this.buttonChangeSubscribe = this.buttonChangeSubscribe.bind(this);
		this.buttonChangeShowMore = this.buttonChangeShowMore.bind(this);
    this.buttonChangeAddPicture = this.buttonChangeAddPicture.bind(this);
	}

	buttonChangeLogin(event) {}

  buttonChangeSubscribe(event) {

	  let firstColumnHeight = document.getElementById("column-1").offsetHeight,
      secondColumnHeight = document.getElementById("column-2").offsetHeight,
      thirdColumnHeight = document.getElementById("column-3").offsetHeight,
      fourthColumnHeight = document.getElementById("column-4").offsetHeight;

    alert("column-1: " + firstColumnHeight + "\n" +
      "column-2: " + secondColumnHeight +"\n" +
      "column-3: " + thirdColumnHeight +"\n" +
      "column-4: " + fourthColumnHeight +"\n");

    this.setState({
      secondColumnLength: height
    });

    event.preventDefault();
  }

  buttonChangeAddPicture(event) {

    let firstColumnHeight = document.getElementById("column-1").offsetHeight,
      secondColumnHeight = document.getElementById("column-2").offsetHeight,
      thirdColumnHeight = document.getElementById("column-3").offsetHeight,
      fourthColumnHeight = document.getElementById("column-4").offsetHeight;

    let pos = this.state.positions;

	  if (firstColumnHeight <= secondColumnHeight &&
      firstColumnHeight <= thirdColumnHeight &&
      firstColumnHeight <= fourthColumnHeight) {

      pos.push(0);
      this.setState({
        positions: pos
      });
    } else if (secondColumnHeight <= firstColumnHeight &&
      secondColumnHeight <= thirdColumnHeight &&
      secondColumnHeight <= fourthColumnHeight) {

	    pos.push(1);
      this.setState({
        positions: pos
      });
    } else if (thirdColumnHeight <= firstColumnHeight &&
      thirdColumnHeight <= secondColumnHeight &&
      thirdColumnHeight <= fourthColumnHeight) {

      pos.push(2);
      this.setState({
        positions: pos
      });
    } else {
      pos.push(3);
      this.setState({
        positions: pos
      });
    }

    this.setState({
      countFrames: ++this.state.countFrames
    });

	  event.preventDefault();
  }

	buttonChangeShowMore(event) {
		this.setState({
			countFrames: ++this.state.countFrames
		});

		event.preventDefault();
	}

	render() {
		let photos = [];

		for (let i = 0; i < 4; i++) {
      photos.push([]);
    }

    for (let j = 1; j <= this.state.countFrames && j <= this.state.photos; j++) {
      photos[this.state.positions[j-1]].push(
        <div className="img-margin">
          <a href="#">
            <img src={"images/photos/" + j + ".jpg"} id={j} className="img-rounded" width="100%" alt={j} />
          </a>
        </div>
      )
    }

    /*let photos = [];
    for (let i = 0; i < 4; i++) {
      photos.push([]);

      for (let j = i + 1; j <= 20 * this.state.countFrames && j <= this.state.photos; j = j + 4) {
        photos[i].push(
          <div className="img-margin">
            <a href="#">
              <img src={"images/photos/" + j + ".jpg"} id={j} className="img-rounded" width="100%" alt={j}/>
            </a>
          </div>
        )
      }
    }*/

		return (
			<div>
				<div className="second-container">
					<div className="container">
						<div className="row">

							<div className="col-lg-4 col-md-4 col-sm-4"></div>

							<div className="col-lg-2 col-md-2 col-sm-2"><br/>
								<img src="images/avatar.jpg" alt="Night Lovell" className="img-rounded" width="100%" />
							</div>

							<div className="col-lg-4 col-md-4 col-sm-4">
								<h3 className="text-left">Name Surname</h3>

								<ul className="list-unstyled text-left">
									<li><span className="label label-danger">{this.state.subscribers}</span> Subscribers</li>
									<li><span className="label label-warning">{this.state.followers}</span> Followers</li>
									<li><span className="label label-success">{this.state.photos}</span> Photos</li>
								</ul>

								<p className="text-left">
                  <form onSubmit={this.buttonChangeSubscribe}>
                    <button className="btn btn-default" type="submit">Subscribe</button>
                  </form>
								</p>
							</div>

							<div className="col-lg-2 col-md-2 col-sm-2"></div>

						</div>
					</div>
				</div>

				<hr/>

				<div className="last">

					<div className="container">
						<div className="row">

							<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" id="column-1">
								{photos[0]}
							</div>

							<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" id="column-2">
								{photos[1]}
							</div>

							<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" id="column-3">
								{photos[2]}
							</div>

							<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" id="column-4">
								{photos[3]}
							</div>

						</div>
					</div>

					<form className="col-lg-offset-5 col-lg-2  col-md-2 col-sm-2 col-xs-2" onSubmit={this.buttonChangeShowMore}>
						<h1 className="text-center">
							<button className="btn btn-block btn-default" type="submit">Show More</button>
						</h1>
					</form>

          <br/>

          <form className="col-lg-offset-5 col-lg-2  col-md-2 col-sm-2 col-xs-2" onSubmit={this.buttonChangeAddPicture}>
            <h1 className="text-center">
              <button className="btn btn-block btn-default" type="submit">Add Picture</button>
            </h1>
          </form>

				</div>
			</div>
		);
	}
}