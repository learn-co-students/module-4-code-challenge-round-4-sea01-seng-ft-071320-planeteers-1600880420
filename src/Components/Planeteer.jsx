import React from 'react';

class Planeteer extends React.Component {

  state = {
    displayQuote: false
  }

  handleClick = () => {
    this.setState({displayQuote: !this.state.displayQuote})
  }
  render() {
    let {bio, fromUSA, name, pictureUrl, quote, twitter} = this.props.planeteer
    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" onClick={this.handleClick}/>
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.displayQuote ? quote : bio}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>{fromUSA ? 'USA-based' : 'Working overseas'}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
