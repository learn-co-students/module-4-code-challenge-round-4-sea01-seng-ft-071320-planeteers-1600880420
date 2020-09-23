import React from 'react';

class SearchBar extends React.Component {

  changeHandler = (e) => {
    this.props.setInput(e.target.value)
  }

  render() {
    return (
      <div className="search" >
        <input type='text' name='search' placeholder='Who would you like to search for?' onChange={this.changeHandler} value={this.props.input}>
        </input>
      </div>
    );
  }

}

export default SearchBar;
