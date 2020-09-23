import React from 'react';

class Planeteer extends React.Component {

  state = {
    bio: true
  }

  handleClick = () => {
    this.setState(prev => ({bio: !prev.bio}))
  }

  membersAge = () => {
    const currentYear = new Date().getFullYear()
    const {born} = this.props.planeteer

    return `${currentYear - born} years old.`
  }
  
  render() {
    const { planeteer } = this.props 
    const { bio } = this.state
    return (
      <li className="cards__item">
        <div className="card">
          <img src={planeteer.pictureUrl} alt={planeteer.name} className="card__image" onClick={this.handleClick}/>
          <div className="card__content">
            <div className="card__title">{planeteer.name}</div>
            <p className="card__text" >{
              bio ? planeteer.bio : planeteer.quote
            }</p>
            <div className="card__detail">
              <p>{this.membersAge()}</p>
              <p>{planeteer.twitter}</p>
              <p>{planeteer.fromUSA ? "Based in USA" : "Working Overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
