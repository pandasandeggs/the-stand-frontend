import React, {Component} from 'react';
import ArticleList from '../Components/ArticleList'
import Article from '../Components/Article'


const ArticleCard = (props) => {


  return (
    <div>
    <li onClick={e => props.selectArticle(props.article)}>
    {props.article.title}</li>
    
      <Article article={props.article} displayArticle={props.displayArticle}/>
    </div>
  )
}

export default ArticleCard
