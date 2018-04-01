import React, { Component } from 'react';
import logo from '../logo.svg';

class Nav extends Component {
  render() {
    const {logo, item1, item2, item3} = this.props
    console.log('---', this.props)
    console.log(item1, item2)
    return (
      <nav className="menu">
      <div className="logo"><a href="/">{logo}</a></div>
      <ul>
      <li>{item1}</li>
      <li>{item2}</li>
      <li>{item3}</li>
      </ul>
      </nav>
      );
    }
  }

  export default Nav;