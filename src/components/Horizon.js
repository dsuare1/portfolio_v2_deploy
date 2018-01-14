import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Circle from './Circle';

class Horizon extends Component {
  render() {
    return (
      <div id="horizon-container">
        <div className="hover-item">
          <h3>The Person</h3>
          <Circle id="person" onMouseOver={e => this.props.onMouseOver(e)} onFocus={e => this.props.onMouseOver(e)} />
        </div>
        <div className="hover-item">
          <h3>The Developer</h3>
          <Circle id="developer" onMouseOver={e => this.props.onMouseOver(e)} onFocus={e => this.props.onMouseOver(e)} />
        </div>
        <div className="hover-item">
          <h3>Technologies I&apos;ve Used</h3>
          <Circle id="technologies" onMouseOver={e => this.props.onMouseOver(e)} onFocus={e => this.props.onMouseOver(e)} />
        </div>
        <div className="hover-item">
          <h3>Portfolio</h3>
          <Circle id="portfolio" onMouseOver={e => this.props.onMouseOver(e)} onFocus={e => this.props.onMouseOver(e)} />
        </div>
      </div>
    );
  }
}

Horizon.propTypes = {
  onMouseOver: PropTypes.func.isRequired,
};

export default Horizon;
