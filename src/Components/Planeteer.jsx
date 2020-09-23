import React from 'react';

const Planeteer = ({ planeteer, handleBioToggle }) => {

    return (
      <li onClick={() => handleBioToggle(planeteer)}  className="cards__item">
        <div className="card">
          <img src={planeteer.pictureUrl} alt={"RENDER PERSON NAME"} className="card__image" />
          <div className="card__content">
            <div className="card__title">{planeteer.name}</div>
            <p className="card__text">{planeteer.bio}</p>
            <div className="card__detail">
              <p>{planeteer.twitter}</p>
              <p>{}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }


export default Planeteer;
