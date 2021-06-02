import React, { Component } from 'react'

export default class GifSearch extends Component {

  state = {
    search: ""
  }

  handleChange = (e) => {
    this.setState(
      {
        search: e.target.value
      }
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchGifs(this.state.search)
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" value={this.state.search}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}