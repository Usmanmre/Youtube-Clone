import React from "react";
import "../CSS/Header.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { BiVideoPlus } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";

const Header = () => {
  return (
    <div className="navbar">
      <div className="left-sec">
        <div className="menu_icon">

        <AiOutlineMenu  />
        </div>
     
          <img className="logo"
            src="https://seeklogo.com/images/Y/youtube-flat-logo-DAA449D228-seeklogo.com.png"
            alt=""
          />
        
      </div>

      <div className="mid-sec">
      
          <input type="text" name="search" placeholder="Search" id="search" />
       
         
          <span className="search_icon_style" >

          <AiOutlineSearch id="search-icon" />
          </span>
         
        <span id="mic-icon">

          <FaMicrophone />
        </span>
        
      </div>
        <div className="right-sec">
            <span id="camera">

          <BiVideoPlus />
            </span>
            <span id="notification">

          <AiOutlineBell />
            </span>
          <img className="avatar" src="https://mir-s3-cdn-cf.behance.net/user/230/c91f97614632987.617d7aead0647.png" alt="" />
        </div>
    </div>
  );
};

export default Header;
