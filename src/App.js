import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    filtered: [],
    input: ''
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch('http://localhost:4000/planeteers')
    .then(res => res.json())
    .then(json => this.setState({planeteers: json}))
  }

  setInput = (value) => {
    this.setState({input: value})
    this.profileFilter()
  }

  profileFilter = () => {
    let newbie = this.state.planeteers.filter(teer => {
      if (teer.name.includes(this.state.input) || teer.bio.includes(this.state.input)){ 
        return teer
      }
    })
    this.setState({filtered: newbie})
  }

  render(){
    console.log(this.state.input)
    console.log(this.state.filtered)
    return (
      <div>
        <Header />
        <SearchBar setInput={this.setInput} input={this.state.input}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.input.length > 0 ? this.state.filtered : this.state.planeteers}/>
      </div>
    );
  }

}

export default App;
