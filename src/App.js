import React, { Component } from 'react';
import Newsfeed from './Containers/Newsfeed'
import NavBar from './Containers/NavBar'
import SearchBar from './Components/SearchBar'
import UserCard from './Containers/UserCard'
import ArticleList from './Components/ArticleList'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      isLoading: true,
      articles: [],
      sources: [],
      selectedCategories: ["all"]
    }
  }

  componentDidMount() {

    fetch('https://newsapi.org/v2/everything?sources=associated-press,medical-news-today,ars-technica,fox-sports,buzzfeed,hacker-news,national-geographic&apiKey=0ee37ea5b6c443cda2481bd0cdb71c13')
      .then(resp => resp.json())
      .then(data => this.setState({articles: data.articles, isLoading:false})
    )

    fetch('https://newsapi.org/v2/sources?apiKey=0ee37ea5b6c443cda2481bd0cdb71c13')
      .then(resp => resp.json())
      .then(data => this.setState({sources: data.sources}))

  }

  filteredArticles = (article) => {
    this.state.articles.map(article =>(
      <ArticleList article={article}/>
    ))
  }

  getArticleWithCategories = () => {
     return this.state.articles.map( article => {
       const source = this.state.sources.find( source => {
         return article.source.id === source.id
       })
       const categoryName = source ? source.category : null
       return {...article, category:categoryName}
     })
   }

   handleChoose = (event) => {
      if(!this.state.articles.length){
        console.log("No articles yet...")
      } else {
       this.state.articles.filter( article => {
         return event.target.name === article.category
       })
       if(this.state.selectedCategories === "all"){
         this.setState({
           selectedCategories: [event.target.name]
         })
       } else if (this.state.selectedCategories !== "all"){
         this.setState({
           selectedCategories: [...this.state.selectedCategories, event.target.name]
         })
       } else if {
        // the category checked equals one already here, take it out instead of adding it the the current state
       }
     }
   }

   getFilteredArticles = (category) => {
    let articles = this.getArticleWithCategories()
      return articles.filter(article => this.state.selectedCategories.includes(article.category))
   }

  render() {

    return (
      <div className="App">
        { this.state.isLoading ? <h1>Loading Articles...</h1> :
          <div>
            <NavBar articles={this.state.articles} sources={this.state.sources}/>
            <SearchBar articles={this.state.articles} sources={this.state.sources}/>
            <UserCard className="user-card" articles={this.state.articles} sources={this.state.sources} filteredArticles={this.filteredArticles} handleChoose={this.handleChoose}/>
            <Newsfeed articles={this.getFilteredArticles()} sources={this.state.sources} filteredArticles={this.filteredArticles} articleCategories={this.getArticleCategories}/>
          </div> }
      </div>
    );
  }
}

export default App;
