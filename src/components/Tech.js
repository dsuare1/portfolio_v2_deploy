import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

class Tech extends Component {
  render() {
    return (
      <div id="tech-container" style={this.props.style}>
        <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer" data-tip="NodeJS Docs">
          <i className="devicon-nodejs-plain colored tech-logo" />
          <ReactTooltip effect="solid" />
        </a>

        <a href="https://www.postgresql.org/docs/" target="_blank" rel="noopener noreferrer" data-tip="PostgreSQL Docs">
          <i className="devicon-postgresql-plain colored tech-logo" />
          <ReactTooltip effect="solid" />
        </a>

        <a href="http://docs.sequelizejs.com/" target="_blank" rel="noopener noreferrer" data-tip="Sequelize Docs">
          <i className="devicon-sequelize-plain colored tech-logo" />
          <ReactTooltip effect="solid" />
        </a>

        <a href="https://mochajs.org/" target="_blank" rel="noopener noreferrer" data-tip="Mocha Docs">
          <i className="devicon-mocha-plain colored tech-logo" />
          <ReactTooltip effect="solid" />
        </a>

        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" data-tip="Git Docs">
          <i className="devicon-git-plain colored tech-logo" />
          <ReactTooltip effect="solid" />
        </a>

        <a href="https://reactjs.org/docs/hello-world.html" target="_blank" rel="noopener noreferrer" data-tip="React Docs">
          <i className="devicon-react-plain colored tech-logo" />
          <ReactTooltip effect="solid" />
        </a>

        <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer" data-tip="HTML5 Docs">
          <i className="devicon-html5-plain colored tech-logo" />
          <ReactTooltip effect="solid" />
        </a>

        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" target="_blank" rel="noopener noreferrer" data-tip="CSS3 Docs">
          <i className="devicon-css3-plain colored tech-logo" />
          <ReactTooltip effect="solid" />
        </a>

        <a href="http://api.jquery.com/" target="_blank" rel="noopener noreferrer" data-tip="jQuery Docs">
          <i className="devicon-jquery-plain colored tech-logo" />
          <ReactTooltip effect="solid" />
        </a>

        <a href="https://docs.mongodb.com/" target="_blank" rel="noopener noreferrer" data-tip="MongoDB Docs">
          <i className="devicon-mongodb-plain colored tech-logo" />
          <ReactTooltip effect="solid" />
        </a>
      </div>
    );
  }
}

Tech.propTypes = {
  style: PropTypes.object.isRequired,
};

export default Tech;
