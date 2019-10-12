import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="header-nav">
      <header className="ui centered">
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </header>
      <Link to="/CharacterList">Character List</Link>
      <Link to="/">Home</Link>
    </div>
  );
}
