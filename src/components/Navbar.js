import React from "react";
import MockData from "../Api/MockData.json";

const currentUser = MockData.current_user;

const Navbar = () => {
  console.log(currentUser);
  return (
    <>
      <div className="navbar">
        <div className="nav">
          <div className="nav-left">
            <a href="/">NARWHAL</a>
            <span className="bolder">
              {" "}
              <a href="/">Teams</a>
            </span>
          </div>
          <div className="nav-right">
            <div>
              <p>Hello, {currentUser.name}</p>
            </div>
            <div>
              <img
                className="pro-img"
                src={currentUser.avatar}
                alt="img"
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
