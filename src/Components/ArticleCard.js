import React, {Component} from 'react';
import ArticleList from '../Components/ArticleList'


const ArticleCard = (props) => {
  return (
    <ul>
      <li onClick={e => props.filteredArticle(props.article)}>
      {props.article.title}
      </li>
    </ul>
  )
}

export default ArticleCard
