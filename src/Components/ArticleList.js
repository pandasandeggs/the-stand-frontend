import React, { Component } from 'react';
import ArticleCard from '../Components/ArticleCard'

export default class ArticleList extends Component {

  // updateNewsfeed = () => (
  //
  // )

  // removeArticleFromNewsfeed = () => (
  //
  // )

  renderNewsfeed = () => {
      return (
        this.props.articles.map(article => (
         <ArticleCard article={article} filteredArticles={this.props.filteredArticles} articles={this.props.articles}/>
       ))
     )
  }

  render() {
    return(
      <div id="Newsfeed">
       {this.renderNewsfeed()}
      </div>
    )
  }

}
