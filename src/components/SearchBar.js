import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    // e.preventDefault();
    this.setState({term: e.target.value})
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    //make sure we call callback from parent component
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div>
            <label className="field">Video Search</label>
            <input type="text" value={this.state.term} onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
