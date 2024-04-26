import React from "react";
import Navbar from "../Navbar";
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <div className="settings-menu">
        <ul>
          <li>
            <button>Security Settings</button>
          </li>
          <li>
            <button>Show my Profile</button>
          </li>
          <li>
            <button>Change Address</button>
          </li>
          <li>
            <button>Profilini Gör</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;