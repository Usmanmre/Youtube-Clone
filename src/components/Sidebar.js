import React from "react";
import "../CSS/Sidebar.css";
import SidebarRow from "./SidebarRow";
import { AiFillHome } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";
import { MdWhatshot } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { BiHistory } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { BsStopwatch } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";







const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={AiFillHome} title="Home" />

      <SidebarRow Icon={MdWhatshot} title="Trending" />
      <SidebarRow Icon={MdSubscriptions} title="Subscription" />
      <hr />
      <SidebarRow  Icon={MdLibraryBooks} title="Liabrary" />

      <SidebarRow Icon={BiHistory} title="History" />
      <SidebarRow Icon={BsCameraVideo} title="Your Videos" />
      <SidebarRow  Icon={BsStopwatch} title="Watch Later" />

      <SidebarRow  Icon={AiFillLike} title="Liked Videos" />
      <SidebarRow Icon={AiOutlineDown} title="Show More" />
      <hr />
    
    </div>
  );
};

export default Sidebar;
