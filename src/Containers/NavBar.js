import React, { Component } from 'react'

export default class NavBar extends Component {

  render() {
    return(
      <div className="navWrapper">
			<span className="headerText">The Stand</span>
			<div>
					<img src="https://png.icons8.com/ios/1600/newsstand.png" className="App-logo" alt="news stand" />
			</div>
			<span className="normalText">Your virtual news!</span>
		</div>
    )
  }

}
