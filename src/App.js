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
    sortByAge: '',
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

  setSortByAge = (val) => {
    console.log(val, 'valu')
    if(val === "sortByAge"){
      this.setState(prev => ({
        ...prev,
        allPlaneteers: prev.displayed,
        sortByAge: ''
      }))
    } else {
      this.setState(prev => ({
        ...prev,
        allPlaneteers: [...prev.allPlaneteers.sort((a,b)=> a.born - b.born)],
        sortByAge: "sortByAge"
      }))
    }
  }
  
  addRandomPlaneteer = (newMember) => {
    const x = this.state.allPlaneteers.some(member=> member.name === newMember.name)
    if(!x) {
      fetch(`http://localhost:4000/planeteers`, {
        method: 'POST',
        headers: { 'Content-Type': `application/json` },
        body: JSON.stringify(newMember)
      })
      .then(res => res.json())
      .then(member => {
        this.setState(prev => ({
          ...prev, 
          allPlaneteers: [...prev.allPlaneteers, member],
          displayed: [...prev.allPlaneteers, member]
        }))
      })
    } else {
      alert('member already added')
    }


  }
  
  
  

  render(){
    const { allPlaneteers, query, displayed, sortByAge } = this.state
    const memberList = allPlaneteers.filter(member => member.name.toLowerCase().includes(query) || member.bio.toLowerCase().includes(query))
    return (
      <div>
        <Header />
        <SearchBar setQuery={this.setQuery} query={query} sortByAge={sortByAge} setSortByAge={this.setSortByAge} />
        <RandomButton addRandomPlaneteer={this.addRandomPlaneteer} />
        <PlaneteersContainer planeteers={memberList} />
      </div>
    );
  }

}

export default App;
