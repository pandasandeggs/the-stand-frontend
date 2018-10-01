import React, { Component } from 'react'

export default class NavBar extends Component {

  render() {
    return(
      <div className="navWrapper">
  			<span className="headerText">
          <h1>The Stand</h1>
					<img src="https://png.icons8.com/ios/1600/newsstand.png" className="App-logo" alt="news stand" />
			</span>
			<span className="normalText">Your virtual news!</span>
		</div>
    )
  }

}
