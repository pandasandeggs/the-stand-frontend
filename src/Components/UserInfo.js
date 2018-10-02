import React, { Component } from 'react'


export default class UserInfo extends Component {

  state = {
    selectedCategory: ["all"]
  }

  // filteredArticles
  handleChoose = (event) => {
    this.props.articles.filter( article => {
      return event.target.name === article.category
    })
    this.setState({
      selectedCategory: [...this.state.selectedCategory, event.target.name]
    })
  }

  renderCheckbox = () => {
    const callback = category => {
      return (
        <div key={category} >
          <input type="checkbox" id={category} name={category} onClick={this.handleChoose}/>{category}<br/>
        </div>
      );
    }
    return this.props.categories.map( callback );
  }

  render() {
    console.log(this.state)
    return(
      <div className="user-card">
        <h1>Welcome<br/>Username!</h1>
        <div>
          <h3>Categories</h3>
            <form className="checkboxes">
              <div key="all">
                <input type="checkbox" id="all" name="all" onClick={this.handleChoose}/>all<br/>
                {this.renderCheckbox()}
              </div>
            </form>
        </div>
      </div>
    )
  }

}
