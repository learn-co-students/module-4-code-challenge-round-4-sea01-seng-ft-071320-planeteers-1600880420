import React from 'react';

class SearchBar extends React.Component {

  state = {
    checked: ''
  }

  handleChange = (e) => {
    e.preventDefault()
    const { setQuery } = this.props 
    setQuery(e.target.value)
  }

  handleSort = (e) => {
    e.preventDefault()
    const { setSortByAge } = this.props
    this.state.checked === 'sortByAge' ? this.setState({checked: ''}) : this.setState({checked: 'sortByAge'}) 
    setSortByAge(this.state.checked)
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
        <input type="radio" value="sortByAge" checked={this.state.checked==='sortByAge'} onChange={this.handleSort}/>
      </label>
      </div>
    );
  }

}

export default SearchBar;
