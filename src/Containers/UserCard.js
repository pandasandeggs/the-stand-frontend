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



  getArticleCategories = () => {
    return this.props.articles.map( article => {
      const category = this.props.sources.find( source => {
        return article.source.id === source.id
      })
      const categoryName = category ? category.category : null
      return {...article, category:categoryName}
    })
  }

  render() {
    return(
        <UserInfo categories={this.renderCategories()} articles={this.getArticleCategories()} />
    )
  }
}
