// import React from 'react';
import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center mt-10">
      {/* <p className="font-oldEnglish">The Dragon News</p> */}
      <img className="mx-auto" src={logo} alt="" />
      <p className="text-lg my-1">Journalism Without Fear or Favour</p>
      <p className="text-lg">{moment().format("dddd, MMMM D YYYY")}</p>
    </div>
  );
};

export default Header;
