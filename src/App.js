import React, { Component } from 'react';
import logo from './logo.svg';
import Newsfeed from './Containers/Newsfeed'
import NavBar from './Containers/NavBar'
import SearchBar from './Components/SearchBar'
import UserCard from './Containers/UserCard'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      isLoading: true,
      articles: [],
      sources: [],
      filteredArticles: []
    }
  }

  componentDidMount() {

    fetch('https://newsapi.org/v2/everything?sources=associated-press,medical-news-today,ars-technica,fox-sports,buzzfeed,hacker-news,national-geographic&apiKey=0ee37ea5b6c443cda2481bd0cdb71c13')
      .then(resp => resp.json())
      .then(resp => this.setState({articles: resp.articles, isLoading:false})
    )

    fetch('https://newsapi.org/v2/sources?apiKey=0ee37ea5b6c443cda2481bd0cdb71c13')
      .then(resp => resp.json())
      .then(data => this.setState({sources: data.sources}))

  }

  // filteredArticles = () => {
  //   this.articles.map(article =>(
  //
  //
  //   ))
  // }



  render() {
    console.log(this.state.articles)
    return (
      <div className="App">
        { this.state.isLoading ? <h1>Loading Articles...</h1> :
          <div>
            <NavBar articles={this.state.articles} sources={this.state.sources}/>
            <SearchBar articles={this.state.articles} sources={this.state.sources}/>
            <UserCard articles={this.state.articles} sources={this.state.sources}/>
            <Newsfeed articles={this.state.articles} />
          </div>}
      </div>
    );
  }
}

export default App;
