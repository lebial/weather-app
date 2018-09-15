import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { term: '' };
  onInputChange = this.onInputChange.bind(this);
  onFormSubmit = this.onFormSubmit.bind(this);

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event){
   event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
