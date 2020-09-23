import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  return (
    <ul className="cards">
      {
        props.planeteers.map(teer => <Planeteer key={teer.id} planeteer={teer}/>)
      }
    </ul>
  )

};

export default PlaneteersContainer;
