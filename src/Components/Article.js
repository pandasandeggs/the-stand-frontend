import React, {Component} from 'react';


const Article = (props) => {
  return (
    <li onClick={e => props.filteredArticle(props.article)}>{props.article.title}</li>
  )
}

export default Article
