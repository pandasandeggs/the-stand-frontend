import React, { Component } from 'react'
import ArticleList from '../Components/ArticleList'

export default class Newsfeed extends Component {

  // updateNewsfeed = () => (
  //
  // )

  // removeArticleFromNewsfeed = () => (
  //
  // )


  render() {
    return(
      <div id="Newsfeed">
       <ArticleList articles={this.props.articles} filteredArticles={this.props.filteredArticles}/>
      </div>
    )
  }

}
