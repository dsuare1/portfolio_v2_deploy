import React, { Component } from 'react';

import profilePic from '../assets/img/profile_pic_small.png';
import resumeIcon from '../assets/img/resume_icon_white.png';
import resume from '../assets/files/derrick_kyle_suarez_resume_pdf.pdf';

function copyToClipboard(value) {
  const p = document.createElement('textarea');
  p.innerHTML = value;
  document.body.appendChild(p);
  p.select();
  document.execCommand('copy');
  p.remove();

  return false;
}

class Badge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailHover: false,
      profilePicHover: false,
      tooltip: 'Click to copy',
    };
  }

  handleMouseIn(e) {
    console.log(e.target.id);
    if (e.target.id === 'badge-email-button') {
      this.setState({
        emailHover: true,
      });
    }

    if (e.target.id === 'profile-pic' || e.target.id === 'profile-pic-anchor') {
      this.setState({
        profilePicHover: true,
      });
    }
  }

  handleMouseOut(e) {
    if (e.target.id === 'badge-email-button') {
      this.setState({
        emailHover: false,
        tooltip: 'Click to copy',
      });
    }

    if (e.target.id === 'profile-pic' || e.target.id === 'profile-pic-anchor') {
      this.setState({
        profilePicHover: false,
      });
    }
  }

  handleClick(e) {
    copyToClipboard(e.target.innerHTML);

    if (e.target.id === 'badge-email-button') {
      this.setState({
        emailHover: true,
        tooltip: 'Copied!',
      });
    }
  }

  render() {
    const emailTooltipStyle = {
      alignSelf: 'center',
      backgroundColor: '#01182c',
      borderRadius: '.25em',
      display: this.state.emailHover ? 'table' : 'none',
      fontSize: '.5em',
      marginTop: '3em',
      padding: '.5em',
      position: 'fixed',
    };

    const emailArrowStyle = {
      alignSelf: 'center',
      backgroundColor: '#01182c',
      display: this.state.emailHover ? 'table' : 'none',
      height: '20px',
      marginTop: '1.25em',
      position: 'fixed',
      transform: 'rotate(45deg)',
      width: '20px',
    };

    const resumeIconStyle = {
      marginLeft: this.state.profilePicHover ? '5em' : '0em',
      position: 'absolute',
      transition: 'margin-left 0.35s ease',
      zIndex: '1',
    };

    return (
      <div id="badge-container">
        <div className="badge-copy-container">
          <h1 id="badge-name">Derrick Suarez</h1>
        </div>
        <div className="badge-copy-container">
          <a href={resume} id="profile-pic-anchor" target="_blank" onMouseOver={(e) => { this.handleMouseIn(e); }} onFocus={(e) => { this.handleMouseIn(e); }} onMouseOut={(e) => { this.handleMouseOut(e); }} onBlur={(e) => { this.handleMouseOut(e); }}>
            <img id="profile-pic" src={profilePic} alt="Profile Pic" />
          </a>
          <img id="resume-icon" src={resumeIcon} alt="Resume" style={resumeIconStyle} />
        </div>
        <div className="badge-copy-container">
          <h1 id="badge-email">
            <button id="badge-email-button" onMouseOver={(e) => { this.handleMouseIn(e); }} onFocus={(e) => { this.handleMouseIn(e); }} onMouseOut={(e) => { this.handleMouseOut(e); }} onBlur={(e) => { this.handleMouseOut(e); }} onClick={(e) => { this.handleClick(e); }}>suarez.derrick@gmail.com</button>
            <div style={emailArrowStyle} />
            <span style={emailTooltipStyle}>{this.state.tooltip}</span>
          </h1>
        </div>
      </div>
    );
  }
}

export default Badge;
