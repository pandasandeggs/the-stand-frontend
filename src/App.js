import React, { Component } from 'react';
import logo from './logo.svg';
import Newsfeed from './Containers/Newsfeed'
import NavBar from './Containers/NavBar'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      isLoading: true,
      articles: [],
      sources: []
    }
  }

  componentDidMount() {

    fetch('https://newsapi.org/v2/everything?sources=associated-press&apiKey=0ee37ea5b6c443cda2481bd0cdb71c13')
      .then(resp => resp.json())
      .then(articles => this.setState({articles, isLoading:false})
    )

    fetch('https://newsapi.org/v2/sources?apiKey=0ee37ea5b6c443cda2481bd0cdb71c13')
      .then(resp => resp.json())
      .then(sources => this.setState({sources}))

  }

  render() {
    return (
      <div className="App">
        < NavBar />
        {this.state.isLoading ? <h1>Loading Articles...</h1> : < Newsfeed articles={this.state.articles} sources={this.state.sources}/>}
      </div>
    );
  }
}

export default App;
