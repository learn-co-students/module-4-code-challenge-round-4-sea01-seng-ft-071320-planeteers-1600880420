import React from 'react';

class SearchBar extends React.Component {


  handleChange = (e) => {
    e.preventDefault()
    const { setQuery } = this.props 
    setQuery(e.target.value)
  }

  handleSort = (e) => {
    e.preventDefault()
    const { setSortByAge } = this.props
    setSortByAge(e.target.value)
  }

  
  
  
  render() {
    const { query, sortByAge } = this.props 
    return (
      <div className="search">
        <strong>Search:</strong>
      <label>
        <input type="text" value={query}  onChange={this.handleChange}/>
      </label>
      <label>
        Sort by Age
        <input type="radio" value="sortByAge" checked={sortByAge==='sortByAge'} onChange={this.handleSort}/>
      </label>
      <label>
        Clear Sort
      <input type="radio" value="sortByNone" checked={sortByAge===''} onChange={this.handleSort}/>

      </label>
      </div>
    );
  }

}

export default SearchBar;
