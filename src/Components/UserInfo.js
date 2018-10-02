import React, { Component } from 'react'


export default class UserInfo extends Component {

  renderCheckbox = () => {
    const callback = category => {
      return (
        <div key={category} >
          <input type="checkbox" id={category} name={category} onClick={event => this.props.handleChoose(event)}/>{category}<br/>
        </div>
      );
    }
    return this.props.categories.map( callback );
  }

  render() {
    return(
      <div className="user-card">
        <h1>Welcome<br/>Username!</h1>
        <div>
          <h3>Categories</h3>
            <form className="checkboxes">
              <div key="all">
                <input type="checkbox" id="all" name="all" onClick={this.handleChoose} />all<br/>
                {this.renderCheckbox()}
              </div>
            </form>
        </div>
      </div>
    )
  }

}
