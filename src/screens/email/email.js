import "./email.css";
import React from "react";
import img from "../../img/imgg.jpg";
import logo from "../../img/USA.jpg";

export default function email() {
  return (
    <div className="section_one">
      <div className="header-two">
        <p>
          <img className="logo" src={logo} alt="logo" />
          English
        </p>
        <h1>
          OriHero <br /> <span>Admin</span>
        </h1>
        <img src={img} alt="imgg" />
      </div>
      <div className="box_one">
        <div className="left_one"></div>
        <div className="right_one">
        <input
            type="text"
            className="input_one"
            placeholder="Search Produce"
          />
  <div className="checkbox"><input  className="Check_box" type="Checkbox" />
  <p className="Check_box">Select All</p></div>
          
        </div>
      </div>
    </div>
  );
}
