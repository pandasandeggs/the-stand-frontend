import React, { Component } from 'react'
import UserInfo from '../Components/UserInfo'

export default class UserCard extends Component {

  constructor(){
    super();
    this.state = {
      category: ""
    }
  }

  renderCategories = (props) => {
      let uniqueCategories = []
    for (var i=0; i<this.props.sources.length; i++){
      let category = this.props.sources[i].category;
      if(uniqueCategories.indexOf(category)=== -1)
      uniqueCategories.push(category)
    }
    return uniqueCategories
  }



  render() {
    return(
        <UserInfo handleChoose={this.props.handleChoose} categories={this.renderCategories()} />
    )
  }
}
