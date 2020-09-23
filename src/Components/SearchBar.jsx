import React from 'react';

class SearchBar extends React.Component {

  handleChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)

    // if props.planteere.name/.bio includes what is tyedin search then display the card, orhterwise render all

    let currentList = []
    let newList = []
    if (e.target.value !== "") {
      currentList = this.props.planeteer.map(planeteer => planeteer)
      newList = currentList.filter(planeteer=> {
        const lc = planeteer.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter)
      })
    } else {
      newList = this.props.planeteer
    }
    // https://dev.to/iam_timsmith/lets-build-a-search-bar-in-react-120j
  }

  render() {
    return (
      <div className="search">
        <div>
          <input type="text" className="input" onChange={this.handleChange} placeholder="Who Would You Like To Search For?" />
        </div>
      </div>
    );
  }

}

export default SearchBar;
