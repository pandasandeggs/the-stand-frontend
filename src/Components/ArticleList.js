import React, { Component } from 'react';
import ArticleCard from '../Components/ArticleCard'

export default class ArticleList extends Component {

  generateArticleCards = () => {
    return this.props.articles.map(article => {
      return <ArticleCard article={article} getAllArticles={this.props.getAllArticles} selectArticle={this.props.selectArticle}
      displayArticle={this.props.displayArticle} />
     })
  }

  render() {
    return(
      <div id="Newsfeed">
       {this.generateArticleCards()}
      </div>
    )
  }

}
