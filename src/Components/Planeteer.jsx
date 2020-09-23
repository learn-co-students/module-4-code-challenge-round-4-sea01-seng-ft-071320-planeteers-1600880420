import React from 'react';

class Planeteer extends React.Component {

  state = {
    
    showDetails: false
  }

  handleClick = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }))
  }

  render() {
    // console.log(this.state)
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" onClick={this.handleClick} />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text"> {this.state.showDetails? this.props.planeteer.quote :this.props.planeteer.bio } </p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>{this.props.planeteer.fromUSA? "USA-based":"Working Overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}
// bio: "Xiye Bastida is a teenage climate activist currently based in New York City and one of the lead organizers of the Fridays For Future youth climate strike movement. Bastida was born and raised in Mexico as part of the Otomi-Toltec indigenous peoples. She sits on the administration committee of the Peoples Climate Movement, where she brings the voice of youth to existing grassroots and climate organizations. She received the “Spirit of the UN” award in 2018."
// born: 2002
// fromUSA: true
// id: 3
// name: "Xiye Bastida"
// pictureUrl: "https://160g7a3snajg2i1r662yjd5r-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/xiya.jpg"
// quote: "We are on Earth to take care of life. We are on Earth to take care of each other."
// twitter:

export default Planeteer;
