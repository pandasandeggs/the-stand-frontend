import React, { Component } from 'react'
import Article from '../Components/Article'

export default class Newsfeed extends Component {

  // updateNewsfeed = () => (
  //
  // )

  // removeArticleFromNewsfeed = () => (
  //
  // )

  renderNewsfeed = () => {
    console.log(this.props.articles)
      return (
        this.props.articles.map(article => (
         <Article article={article} />
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
