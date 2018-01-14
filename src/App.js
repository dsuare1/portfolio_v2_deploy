
import React, { Component } from 'react';
import { render } from 'react-dom';

import Badge from './components/Badge';
import Horizon from './components/Horizon';
import Portfolio from './components/Portfolio';
import Tech from './components/Tech';

import './css/style.css';
import './css/media-queries/mq-badge.css';
import './css/media-queries/mq-copy.css';
import './css/media-queries/mq-tech.css';
import './css/media-queries/mq-horizon.css';

import copy from './assets/copy.json';

function createCopy(hash) {
  return Object.keys(hash).map((p, i) => {
    return <p key={i}>{hash[p]}</p>;
  });
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personHover: true,
      developerHover: false,
      techHover: false,
      portfolioHover: false,
    };
  }

  handleMouseOver(e) {
    switch (e.target.id) {
      case 'person':
        this.setState({
          personHover: true,
          developerHover: false,
          techHover: false,
          portfolioHover: false,
        });
        break;

      case 'developer':
        this.setState({
          personHover: false,
          developerHover: true,
          techHover: false,
          portfolioHover: false,
        });
        break;

      case 'technologies':
        this.setState({
          personHover: false,
          developerHover: false,
          techHover: true,
          portfolioHover: false,
        });
        break;

      case 'portfolio':
        this.setState({
          personHover: false,
          developerHover: false,
          techHover: false,
          portfolioHover: true,
        });
        break;

      default:
        // Do nothing
    }
  }

  render() {
    const personContainerStyle = {
      color: '#ffffff',
      display: this.state.personHover ? 'block' : 'none',
      fontSize: '1.125em',
      height: '55vh',
      overflow: 'scroll',
      textAlign: 'center',
    };

    const developerContainerStyle = {
      color: '#ffffff',
      display: this.state.developerHover ? 'block' : 'none',
      fontSize: '1.125em',
      height: '55vh',
      overflow: 'scroll',
      textAlign: 'center',
    };

    const techContainerStyle = {
      alignItems: 'center',
      display: this.state.techHover ? 'flex' : 'none',
      flexDirection: 'row',
      flexWrap: 'wrap',
      height: '100%',
      justifyContent: 'center',
    };

    const portfolioContainerStyle = {
      display: this.state.portfolioHover ? 'flex' : 'none',
      flexDirection: 'row',
      flexWrap: 'wrap',
      height: '100%',
      justifyContent: 'space-around',
      paddingBottom: '1em',
    };

    return (
      <div id="app">
        <Badge />
        <div id="copy-container">
          <div id="person-copy-container" style={personContainerStyle}>{createCopy(copy.person)}</div>
          <div id="developer-copy-container" style={developerContainerStyle}>{createCopy(copy.developer)}</div>
          <Tech style={techContainerStyle} />
          <Portfolio style={portfolioContainerStyle} />
        </div>
        <Horizon onMouseOver={e => this.handleMouseOver(e)} onFocus={e => this.handleMouseOver(e)} />
      </div>
    );
  }
}

export default App;

render(<App />, document.getElementById('react-root'));
