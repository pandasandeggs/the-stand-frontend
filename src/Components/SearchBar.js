import React, { Component } from 'react'

export default class SearchBar extends Component {

  state = {
    searchItem: "All",
    searchResults:[]
  }

  handleOnChange = (event) =>{
    //console.log('handleOnChange', event.target.name, event.target.value)
    this.setState({[event.target.name]: event.target.value})
    //Filter Newsfeed
  }

  handleOnSubmit = (event) =>{
    let newResults = []
    event.preventDefault()
    //console.log('handleOnSubmit');
    this.setState({searchItem: event.target.value})
    newResults = this.getSearchResults(this.state.searchItem)
    this.setState({searchResults: newResults})
    console.log('newResults',newResults)
  }

  getSearchResults = (searchItem) =>{
    console.log('searchItem = ', searchItem)
    return this.props.articles.filter((article) =>{
       if (article.content){
       return article.content.includes(searchItem)}
    })

  }

  render() {
    // console.log('In SearchBar')
    // console.log(this.props.articles)
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="searchItem" value={this.searchItem} onChange={this.handleOnChange}/>
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }

}
