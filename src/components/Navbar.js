import React from "react";
export default function Navbar() {
  return (
    <nav className="nav">
      <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} className="nav-logo" alt="logo" />
      <h3 className="nav-text">my travel journal</h3>
    </nav>
  );
}
