import React from "react";

const NavBar = () => {
  return (
    <div className="profile__navBar">
      <div className="profile__logoContainer">
        <div className="profile__logo">Travelize</div>
        <div className="profile__miniLogo">My travelling experiences</div>
      </div>
      <ul className="profile__links">
        <li>
          <a className="profile__item " href="#">
            Home
          </a>
        </li>
        <li>
          <a className="profile__item " href="#">
            Blog
          </a>
        </li>
        <li>
          <a className="profile__item " href="#">
            About
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
