import React, { Component } from "react";
import "./LeftNavigation.css";


import logo from '../../../Assets/docg-mobile.png';
import main_logo from '../../../Assets/Doc G Logo.svg';
import dashboard_icon from '../../../Assets/Dashboard side menu icon.svg';
import schedule_icon from '../../../Assets/Shedule side menu icon.svg';
import calendar_icon from '../../../Assets/Calendar side menu icon.svg';
import patientRecord_icon from '../../../Assets/Patients record menu icon.svg';
import resources_icon from '../../../Assets/Resources side menu icon.svg';
import reporting_icon from '../../../Assets/Reporting side menu icon.svg';
import setting_icon from '../../../Assets/Settings side menu icon.svg';
import plus_icon from '../../../Assets/Add.svg';
import logo_toggle from '../../../Assets/docg-mobile.png';


function showdropdownmenu(){
    var div = document.getElementById('patient-records-dropdown');
    if (div.style.display !== "none") {
        div.style.display="none";
    }else{
        div.style.display="block";
    }
}


function dropdownmenu(){
    var div = document.getElementById('settings-dropdown-menu');
    if (div.style.display !== "none") {
        div.style.display="none";
    }else{
        div.style.display="block";
    }
}


class LeftNavigation extends Component{
    render(){
        return(
            <>
            <input type="checkbox" id="sidenavbar-toggler" />
            <div className="sidenavbar-panel">
                <div className="sidenavbar-brand">
                    <center>
                        <img src={main_logo} id="large-logo" />
                        <img src={logo} id="shrink-logo" />
                    </center>
                </div>
                <div className="header-divider"></div>
                <div className="userprofile-panel">
                    <img src="https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" />
                    <center><p className="mt-2" id="userprofile-name">Dr. Singh</p></center>
                </div>
                <div className="divider_user_profile"></div>
                <div className="sidebar-menu">
                        <ul>
                            <li>
                                <a href="#" class="active">
                                    <span id="dashboard-icon-sidebar">
                                        <img src={dashboard_icon} />
                                    </span>
                                    <span className="sidemenu-text">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="active">
                                    <span>
                                        <img src={schedule_icon} />
                                    </span>
                                    <span className="sidemenu-text">&nbsp;Schedules</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="active">
                                    <span>
                                        <img src={calendar_icon} />
                                    </span>
                                    <span className="sidemenu-text">&nbsp;Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={showdropdownmenu} class="active">
                                    <span>
                                        <img src={patientRecord_icon} />
                                    </span>
                                    <span className="sidemenu-text">&nbsp;Patient Records</span>
                                    <span className="dropdown_icon">
                                        <img src={plus_icon} />
                                    </span>
                                </a>
                            </li>
                            <div class="dropdown-menu-container" id="patient-records-dropdown">
                            <li>
                                <a href="#" class="active">
                                    
                                    <span className="sidemenu-text">&nbsp;Patient Detail</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="active">
                                    
                                    <span className="sidemenu-text">&nbsp;Add Patient</span>
                                </a>
                            </li>
                            </div>
                            <li>
                                <a href="#" class="active">
                                    <span>
                                        <img src={resources_icon} />
                                    </span>
                                    <span className="sidemenu-text">&nbsp;Resources</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="active">
                                    <span>
                                        <img src={reporting_icon} />
                                    </span>
                                    <span className="sidemenu-text">&nbsp;&nbsp;Reporting</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={dropdownmenu} class="active">
                                    <span>
                                        <img src={setting_icon} />
                                    </span>
                                    <span className="sidemenu-text">&nbsp;Settings</span>
                                    <span className="dropdown_icon">
                                        <img src={plus_icon} />
                                    </span>
                                </a>
                            </li>
                            <div class="dropdown-menu-container" id="settings-dropdown-menu">
                            <li>
                                <a href="#" class="active">
                                    <span className="sidemenu-text">&nbsp; Invoice</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="active">
                                    <span className="sidemenu-text">&nbsp; Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="active">
                                    <span className="sidemenu-text">&nbsp; Fee</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="active">
                                    <span className="sidemenu-text">&nbsp; Notification</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="active">
                                    <span className="sidemenu-text">&nbsp; Payment</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="active">
                                    <span className="sidemenu-text">&nbsp; Membership</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="active">
                                    <span className="sidemenu-text">&nbsp; Symptom Checker Q</span>
                                </a>
                            </li>
                            </div>
                        </ul>
                    </div>
                    <div className="bottom-text-sidebar">
                        <p>Powered by : <span className="text-white">Company Name</span></p>
                        <p>Terms & Conditions</p>
                    </div>
            </div>
            </>
        )
    }
}

export default LeftNavigation;