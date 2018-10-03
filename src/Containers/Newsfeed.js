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
       <ArticleList articles={this.props.articles} getAllArticles={this.props.getAllArticles}
       selectArticle={this.props.selectArticle}
       displayArticle={this.props.displayArticle}/>
      </div>
    )
  }

}
