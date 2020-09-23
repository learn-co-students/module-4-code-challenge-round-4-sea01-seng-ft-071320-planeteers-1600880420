import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteer: []
  }

  componentDidMount() {
    fetch("http://localhost:4000/planeteers")
    .then(res => res.json())
    .then(json => {this.setState({
      planeteer: json
      })
    })
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar planeteer={this.state.planeteer}/>
        <RandomButton/>
        <PlaneteersContainer planeteer={this.state.planeteer} />
      </div>
    );
  }

}

export default App;
