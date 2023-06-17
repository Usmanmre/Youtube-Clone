import React from "react";
import "../CSS/SidebarRow.css";

const SidebarRow = ({ selected, Icon, title }) => {
  return (
    <div className={`SidebarRow  ${selected && `selected`}`} >
      
      <Icon className="sidebar_icon"/>
      <h4 className="sidebar_title">{title}</h4>
    </div>
  );
};

export default SidebarRow;
