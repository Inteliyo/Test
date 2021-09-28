import React from "react";
import { Component } from "react";
import './TopNavigation.css';
import toggle_icon from "../../../Assets/Toggle icon.svg";
import video_icon from "../../../Assets/Video icon.svg";

import calendar_icon from "../../../Assets/Top bar calender icon.svg";
import mail_icon from "../../../Assets/Top bar mail icon.svg";
import message_icon from "../../../Assets/Top bar message icon.svg";
import notification_icon from "../../../Assets/Top bar notification icon.svg";
import logout_icon from "../../../Assets/Top bar turn off icon.svg";

class TopNavigation extends Component {
  render() {
    return (
      <>
        <div className="topnavbar-panel">
          <header>
                <label for="sidenavbar-toggler"> 
                    <img src={toggle_icon} id="navbar-toggler-btn" />
                </label>

                <div className="videocall-notification">
                    <span class="pulse"></span>&emsp;
                    <span className="appointment_message">Appointment is next <span id="appointment_time">00:30</span> Min</span>&nbsp;&nbsp;
                    <span className="video_icon_top_bar"><img id="video-call-icon-top" src={video_icon} /></span>
                    </div>

                <div className="topnav-right-menu">
                  <a href="#">
                    <img src={calendar_icon} />
                  </a>

                  <a href="#">
                    <img src={mail_icon} />
                  </a>

                  <a href="#">
                    <img src={notification_icon} />
                  </a>

                  <a href="#">
                    <img src={message_icon} />
                  </a>

                  <a href="#">
                    <img src={logout_icon} />
                  </a>
                </div>
          </header>
          <div className="header-divider"></div>
        </div>
      </>
    );
  }
}

export default TopNavigation;
