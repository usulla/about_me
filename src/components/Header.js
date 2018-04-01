import React, { Component } from 'react';

class Header extends Component {
  render() {
    const {title, profession, description} = this.props

    return (
         <header className="Header-header">
          <h1 className="Header-title">{title} <span>{profession}</span></h1>
          <div className="Header-description">{description}</div>
          <div className="Header-photo"><img src={photo} alt={alt}></div>
         </header>
      );
    }
  }

  export default Header;