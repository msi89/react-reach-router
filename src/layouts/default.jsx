import React from "react";
import { Link } from "@reach/router";
import logo from "../logo.svg";

const DefaultLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <header className="app-header">
        <Link className="app-brand" to="/">
          <img src={logo} className="app-logo" alt="logo" />
          <span>Learn React</span>
        </Link>
        <ul className="app-nav">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/log">log</Link>
          </li>
        </ul>
      </header>
      {children}
    </div>
  );
};

export default DefaultLayout;
