import React from "react";

class MainPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
      amountFrames: 1,

			columnsHeight: [0, 0, 0, 0],

      positions: [0],

      indexPhotos: [],

			amountSubscribers: 50,
			amountFollowers: 17,
      amountPhotos: 68
		};

		this.error = {};

		this.buttonsChange = this.buttonsChange.bind(this);
	}

  buttonsChange(event) {
		const action = event.target.getAttribute("action");

		if (action === "Subscribe") {

		} else if (action === "AddPicture") {
      let columnsHeight = [];
      for (let i = 0; i < 4; i++) {
        columnsHeight[i] = document.getElementById("column-" + i).offsetHeight;
      }

      let positions = this.state.positions;

      if (columnsHeight[0] <= columnsHeight[1] &&
        columnsHeight[0] <= columnsHeight[2] &&
        columnsHeight[0] <= columnsHeight[3]) {

        positions.push(0);
        this.setState({
          positions: positions
        });
      } else if (columnsHeight[1] <= columnsHeight[0] &&
        columnsHeight[1] <= columnsHeight[2] &&
        columnsHeight[1] <= columnsHeight[3]) {

        positions.push(1);
        this.setState({
          positions: positions
        });
      } else if (columnsHeight[2] <= columnsHeight[0] &&
        columnsHeight[2] <= columnsHeight[1] &&
        columnsHeight[2] <= columnsHeight[3]) {

        positions.push(2);
        this.setState({
          positions: positions
        });
      } else {
        positions.push(3);
        this.setState({
          positions: positions
        });
      }

      this.setState({
        amountFrames: ++this.state.amountFrames
      });

    } else if (action === "ShowMore") {
      this.setState({
        amountFrames: ++this.state.amountFrames
      });
		}

    event.preventDefault();
  }

	render() {
		let photos = [];

		for (let i = 0; i < 4; i++) {
      photos.push([]);
    }

    const amountPhotos = this.state.amountPhotos;
		const amountFrames = this.state.amountFrames;

    for (let j = amountPhotos; j >= 1 && j >= amountPhotos - amountFrames + 1; j--) {
      photos[this.state.positions[amountPhotos - j]].push(
        <div className="img-margin" key={j}>
          <a href="#" className="wrap">
            <div className="number">{j}</div>

            <img src={"images/photos/" + j + ".jpg"} className="img-rounded" width="100%" alt={"photo-" + j} />
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
									<li><span className="label label-danger">{this.state.amountSubscribers}</span> Subscribers</li>
									<li><span className="label label-warning">{this.state.amountFollowers}</span> Followers</li>
									<li><span className="label label-success">{this.state.amountPhotos}</span> Photos</li>
								</ul>


                <form action="Subscribe" onSubmit={this.buttonsChange}>
                  <button className="btn btn-default" type="submit">Subscribe</button>
                </form>
							</div>

							<div className="col-lg-2 col-md-2 col-sm-2"></div>

						</div>
					</div>
				</div>

				<hr/>

				<div className="last">

					<div className="container">
						<div className="row">

							<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" id="column-0">
								{photos[0]}
							</div>

							<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" id="column-1">
								{photos[1]}
							</div>

							<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" id="column-2">
								{photos[2]}
							</div>

							<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" id="column-3">
								{photos[3]}
							</div>

						</div>
					</div>

					<form className="col-lg-offset-5 col-lg-2  col-md-2 col-sm-2 col-xs-2" action="ShowMore" onSubmit={this.buttonsChange}>
						<h1 className="text-center">
							<button className="btn btn-block btn-default" type="submit">Show More</button>
						</h1>
					</form>

          <br/>

          <form className="col-lg-offset-5 col-lg-2  col-md-2 col-sm-2 col-xs-2" action="AddPicture" onSubmit={this.buttonsChange}>
            <h1 className="text-center">
              <button className="btn btn-block btn-default" type="submit">Add Picture</button>
            </h1>
          </form>

				</div>
			</div>
		);
	}
}

export default MainPage;
