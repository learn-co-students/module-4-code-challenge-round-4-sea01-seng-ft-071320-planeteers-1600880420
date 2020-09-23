import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  // console.log(this.props)
  return (
    <ul className="cards">
      <div>
      {

        // "Render Planeteers here"
        props.planeteer.map(planeteer => {
          return <Planeteer key={planeteer.id} planeteer={planeteer} />
        })
      }
      </div>
    </ul>
  )

};

export default PlaneteersContainer;
