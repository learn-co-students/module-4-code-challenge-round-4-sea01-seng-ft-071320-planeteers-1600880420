import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  const { planeteers } = props 

  const renderPlaneteers = () => {
    return planeteers.map(member => <Planeteer planeteer={member} /> )
  }

  return (
    <ul className="cards">
      {
        renderPlaneteers()
      }
    </ul>
  )

};

export default PlaneteersContainer;
