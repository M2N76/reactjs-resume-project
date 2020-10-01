import React, { Component } from "react";
import data from "../data.json";
import { Link, Element } from "react-scroll";

import "./Header.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  test() {
    this.props.test();
  }

  render() {
    return (
      <div>
        <header className="Header">
          <div>
          <Link
              className="LinkStyle"
              activeClass="active"
              to="test1"
              spy={true}
              smooth={true}
              
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Introduction
            </Link>
            
          <Link
              className="LinkStyle"
              activeClass="active"
              to="test2"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              About
            </Link>

          <Link
              className="LinkStyle"
              activeClass="active"
              to="test3"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Skills
            </Link>
       
          </div>
          <div>
            <span onClick={() => this.test()}>
              <img className="themeStyle" src={data.theme.img} />{" "}
            </span>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
