import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Circle extends Component {
  render() {
    return (
      <button
        className="circle"
        id={this.props.id}
        onMouseOver={(e) => { this.props.onMouseOver(e); }}
        onFocus={(e) => { this.props.onMouseOver(e); }}
      />
    );
  }
}

Circle.propTypes = {
  id: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func.isRequired,
};

export default Circle;
