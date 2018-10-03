import React, {Component} from 'react';
import ArticleCard from '../Components/ArticleCard'


const Article = (props) => {

  console.log("article",props.article)
  console.log("DisplayArticle",props.displayArticle)
  return (

    <div>
    {props.article.title == props.displayArticle.title
      ?(<div>
        <h1>{props.displayArticle.title}</h1>
        <a href={props.displayArticle.urlToImage}></a>
        <h6>{props.displayArticle.url}</h6>
        <p>{props.displayArticle.content}</p>
        </div>
      )
      : null
    }

    </div>
  )
}

export default Article
