import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <nav>
      <div class="title">
        <h1>STUDY TUNES</h1>
      </div>
      <button
        class="glow-on-hover"
        onClick={() => setLibraryStatus(!libraryStatus)}
      >
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
