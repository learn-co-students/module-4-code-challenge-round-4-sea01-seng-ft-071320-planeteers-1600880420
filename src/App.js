import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {
  state = {
    planeteers:[],
    //was attempting to filter true or false if the planeteer was from USA 
    fromUSA: false
    }
  componentDidMount() {
    fetch(`http://localhost:4000/planeteers`)
    .then(res => res.json())
    .then(planeteers => this.setState({planeteers: planeteers}))
  }
  //this handle is passing all info not just the "quote", unsure of how to pass just the quote.
  handleBioToggle = (planeteers) => {
    console.log(planeteers)
  }

  //unsure of how to start a search
  handleSearch = () => { 

  }


  render(){
    return (

      <div>
        <Header />
        <SearchBar planeteers={this.handleSearch}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.planeteers} handleBioToggle={this.handleBioToggle} />
      </div>
    );
  }
}

export default App;
