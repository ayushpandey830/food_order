import React from 'react';
import "../App.css";
import { SidebarData } from './SidebarData';

function Sidebar() {
  return (
   
      <div className="Sidebar">
        <ul className="Sidebarul">
          {SidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className="row"
                onclick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div id="icon">{val.icon}</div>{" "}
                <div id="title">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
   
  );  
}

export default Sidebar;
