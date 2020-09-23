import React from 'react';

class SearchBar extends React.Component {

  handleChange = (e) => {
    e.preventDefault()
    const { setQuery } = this.props 
    setQuery(e.target.value)
  }
  
  render() {
    const { query } = this.props 
    return (
      <div className="search">
        <strong>Search:</strong>
      <label>
        <input type="text" value={query}  onChange={this.handleChange}/>
      </label>
      </div>
    );
  }

}

export default SearchBar;
