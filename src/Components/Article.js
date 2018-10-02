import React, {Component} from 'react';
import ArticleList from '../Components/ArticleList'


const Article = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <a href={props.urlToImage}></a>
      <h3>{props.source}</h3>
      <h6>{props.url}</h6>
      <p>{props.content}</p>
    </div>
  )
}

export default Article
