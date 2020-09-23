import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    allPlaneteers: [],
    displayed: [],
    query: '',
    sortByAge: false,
  }

  componentDidMount(){
    this.fetchPlaneteers()
  }

  fetchPlaneteers = () => {
    fetch(`http://localhost:4000/planeteers`)
    .then(res => res.json())
    .then(planeteerList => {
      console.log(planeteerList)
      this.setState(prev => ({
        ...prev,
        allPlaneteers: planeteerList, 
        displayed: planeteerList
      }))
    })
  }

  setQuery = (query) => {
    this.setState(prev => ({
      ...prev,
      query: query
    }))
  }

  setSortByAge = (value) => {
    this.setState(prev => ({
      ...prev,
      sortByAge: value
    }))
  }
  
  addRandomPlaneteer = (newMember) => {
    console.log(newMember)
    // this.setState(prev => ({
    //   ...prev, 
    //   allPlaneteers: [...prev.allPlaneteers, new]
    // }))
  }
  
  
  

  render(){
    const { allPlaneteers, query, displayed, addRandomPlaneteer } = this.state
    const memberList = allPlaneteers.filter(member => member.name.toLowerCase().includes(query) || member.bio.toLowerCase().includes(query))
    return (
      <div>
        <Header />
        <SearchBar setQuery={this.setQuery} query={query} setSortByAge={this.setSortByAge} />
        <RandomButton addRandomPlaneteer={addRandomPlaneteer} />
        <PlaneteersContainer planeteers={memberList} />
      </div>
    );
  }

}

export default App;
