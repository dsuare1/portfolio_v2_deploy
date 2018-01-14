import React, { Component } from 'react';
import PropTypes from 'prop-types';

import traLandingPage from '../../assets/img/tra_landing_page.png';
import seinfeldLandingPage from '../../assets/img/seinfeld_landing_page.png';
import pickUpLandingPage from '../../assets/img/pickup_landing_page.png';
import friendFinderLandingPage from '../../assets/img/friend_finder_landing_page.png';

class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio-container" style={this.props.style}>
        <div className="portfolio-item">
          <a href="http://www.theroundaboutstore.com/" className="portfolio-link" target="_blank" rel="noopener noreferrer"><p>The Round About</p>
            <img src={traLandingPage} alt="The Round About" />
          </a>
        </div>
        <div className="portfolio-item">
          <a href="http://suarez-seinfeld-trivia.herokuapp.com/" className="portfolio-link" target="_blank" rel="noopener noreferrer"><p>&copy;Seinfeld Trivia Game</p>
            <img src={seinfeldLandingPage} alt="Seinfeld Trivia Game" />
          </a>
        </div>
        <div className="portfolio-item">
          <a href="http://bjrd-pickup.herokuapp.com/" className="portfolio-link" target="_blank" rel="noopener noreferrer"><p>PickUp</p>
            <img src={pickUpLandingPage} alt="Pick Up" />
          </a>
        </div>
        <div className="portfolio-item">
          <a href="http://suarez-friend-finder.herokuapp.com/" className="portfolio-link" target="_blank" rel="noopener noreferrer"><p>Friend Finder</p>
            <img src={friendFinderLandingPage} alt="Friend Finder" />
          </a>
        </div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  style: PropTypes.object.isRequired,
};

export default Portfolio;
