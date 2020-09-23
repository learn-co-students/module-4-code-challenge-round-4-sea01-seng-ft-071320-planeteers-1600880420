import React, { Component } from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends Component {

  buildPlaneteers = () => {
  return this.props.planeteers.map(pt => {
    return <Planeteer key={pt.id} planeteer={pt} handleBioToggle={this.props.handleBioToggle} />
  })
}

  render() {
  return (
    <ul className="cards">
      {
        this.buildPlaneteers()
      }
    </ul>
  )
}
};

export default PlaneteersContainer;
