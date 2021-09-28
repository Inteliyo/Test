import React, { Component } from "react";
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

import "./KPI.css";

import toggle_icon from "../../../Assets/Toggle icon.svg";

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import bar_icon from '../../../Assets/Graph Icon.svg';

import { $ } from "jquery";

var percentage = 65;

function onoff(){
  var btn = document.getElementById('onoff-btn');
  var on = document.getElementById("online");
  var off = document.getElementById("offline");
  if(btn.checked){
      off.style.display="none";
      on.style.display="block";
  }else{
    off.style.display="block";
      on.style.display="none";
  }
}

class KPI extends Component {
  render() {
    return (
      <>
        <div className="mbsc-grid kpi-area mt-5">
          <div className="kpi-cards-area">
            <div className="mbsc-row">
              <div className="mbsc-col kpi-single-card">
              <div className="card">
                <div className="kpi-card-header">
                  Total Billing
                </div>
                <div className="kpi-card-body">
                  <div className="row">
                    <div className="col-4 kpi-card-icons">
                    <center>
                    <CircularProgressbarWithChildren 
                      value={percentage}
                      styles={{
                        // Customize the root svg element
                        root: {},
                        // Customize the path, i.e. the "completed progress"
                        path: {
                          // Path color
                          stroke: `orange`,
                          strokeWidth:'0.55rem',
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: 'butt',
                          // Customize transition animation
                          transition: 'stroke-dashoffset 0.5s ease 0s',
                          // Rotate the path
                          transform: 'rotate(1turn)',
                          transformOrigin: 'center center',
                          backgroundColor: '#3e98c7',
                        },
                        // Customize the circle behind the path, i.e. the "total progress"
                        trail: {
                          // Trail color
                          stroke: '#f6f6f6',
                          strokeWidth:"0.55rem",
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: 'butt',
                          // Rotate the trail
                          transform: 'rotate(1turn)',
                          transformOrigin: 'center center',
                          backgroundColor: '#3e98c7',
                        },
                        background: {
                          fill: '#ececec',
                        },
                      }}                    
                    >
  <img src={bar_icon} />
</CircularProgressbarWithChildren>
                    </center>
                    </div>
                    <div className="col">
                      <p className="kpi-card-text-main">₹ 200</p>
                      <div id="kpi-second-line">
                      <p className="kpi-card-text-secondary" >
                        <span>12%</span> Growth
                      </p>
                      <p className="kpi-card-text-secondary">
                        Since May, 2021
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>


              <div className="mbsc-col kpi-single-card">
              <div className="card">
              <div className="kpi-card-header">
                  Total Patient
              </div>
              <div className="kpi-card-body">
                  <div className="row">
                    <div className="col-4 kpi-card-icons">
                    <center>
                    <CircularProgressbarWithChildren 
                      value={percentage}
                      styles={{
                        // Customize the root svg element
                        root: {},
                        // Customize the path, i.e. the "completed progress"
                        path: {
                          // Path color
                          stroke: `green`,
                          strokeWidth:'0.55rem',
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: 'butt',
                          // Customize transition animation
                          transition: 'stroke-dashoffset 0.5s ease 0s',
                          // Rotate the path
                          transform: 'rotate(1turn)',
                          transformOrigin: 'center center',
                          backgroundColor: '#3e98c7',
                        },
                        // Customize the circle behind the path, i.e. the "total progress"
                        trail: {
                          // Trail color
                          stroke: '#f6f6f6',
                          strokeWidth:"0.55rem",
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: 'butt',
                          // Rotate the trail
                          transform: 'rotate(1turn)',
                          transformOrigin: 'center center',
                          backgroundColor: '#3e98c7',
                        },
                        background: {
                          fill: '#ececec',
                        },
                      }}                    
                    >
  <img src={bar_icon} />
</CircularProgressbarWithChildren>
                    </center>
                    </div>
                    <div className="col">
                      <p className="kpi-card-text-main">200</p>
                      <div id="kpi-second-line">
                      <p className="kpi-card-text-secondary" >
                        <span>12%</span> Growth
                      </p>
                      <p className="kpi-card-text-secondary">
                        Since May, 2021
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>


              <div className="mbsc-col kpi-single-card">
              <div className="card">
              <div className="kpi-card-header">
                  Appointments
                  </div>
                                  <div className="kpi-card-body">
                  <div className="row">
                    <div className="col-4 kpi-card-icons">
                    <center>
                    <CircularProgressbarWithChildren 
                      value={percentage}
                      styles={{
                        // Customize the root svg element
                        root: {},
                        // Customize the path, i.e. the "completed progress"
                        path: {
                          // Path color
                          stroke: `orange`,
                          strokeWidth:'0.55rem',
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: 'butt',
                          // Customize transition animation
                          transition: 'stroke-dashoffset 0.5s ease 0s',
                          // Rotate the path
                          transform: 'rotate(1turn)',
                          transformOrigin: 'center center',
                          backgroundColor: '#3e98c7',
                        },
                        // Customize the circle behind the path, i.e. the "total progress"
                        trail: {
                          // Trail color
                          stroke: '#f6f6f6',
                          strokeWidth:"0.55rem",
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: 'butt',
                          // Rotate the trail
                          transform: 'rotate(1turn)',
                          transformOrigin: 'center center',
                          backgroundColor: '#3e98c7',
                        },
                        background: {
                          fill: '#ececec',
                        },
                      }}                    
                    >
  <img src={bar_icon} />
</CircularProgressbarWithChildren>
                    </center>
                    </div>
                    <div className="col">
                      <p className="kpi-card-text-main">10</p>
                      <div id="kpi-second-line">
                      <p className="kpi-card-text-secondary" >
                        <span>12%</span> Growth
                      </p>
                      <p className="kpi-card-text-secondary">
                        Since May, 2021
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>


              <div className="mbsc-col kpi-single-card">
              <div className="card">
              <div className="kpi-card-header">
                  Pending Tasks
                  </div>
                                  <div className="kpi-card-body">
                  <div className="row">
                    <div className="col-4 kpi-card-icons">
                    <center>
                    <CircularProgressbarWithChildren 
                      value={percentage}
                      styles={{
                        // Customize the root svg element
                        root: {},
                        // Customize the path, i.e. the "completed progress"
                        path: {
                          // Path color
                          stroke: `#1C5291`,
                          strokeWidth:'0.55rem',
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: 'butt',
                          // Customize transition animation
                          transition: 'stroke-dashoffset 0.5s ease 0s',
                          // Rotate the path
                          transform: 'rotate(1turn)',
                          transformOrigin: 'center center',
                          backgroundColor: '#3e98c7',
                        },
                        // Customize the circle behind the path, i.e. the "total progress"
                        trail: {
                          // Trail color
                          stroke: '#f6f6f6',
                          strokeWidth:"0.55rem",
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: 'butt',
                          // Rotate the trail
                          transform: 'rotate(1turn)',
                          transformOrigin: 'center center',
                          backgroundColor: '#3e98c7',
                        },
                        background: {
                          fill: '#ececec',
                        },
                      }}                    
                    >
  <img src={bar_icon} />
</CircularProgressbarWithChildren>
                    </center>
                    </div>
                    <div className="col">
                      <div>
                      <p className="kpi-card-text-main">6</p>
                      </div>
                      <div id="kpi-second-line">
                      <p className="kpi-card-text-secondary" >
                        <span>12%</span> Growth
                      </p>
                      <p className="kpi-card-text-secondary">
                        Since May, 2021
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="mbsc-col kpi-single-card">
              <div className="card">
              <div className="kpi-card-header">
                  Waiting Patient
                  </div>
                  <div className="kpi-card-body">
                    <center><i className="fa fa-circle fa-2x" id="offline" ></i></center>
                  <p className="kpi-waiting-text" id="online">
                    20
                  </p>
                  
                  <label class="switch onoffbtn">
  <input type="checkbox" id="onoff-btn" onChange={onoff}/>
  <span class="slider round"></span>
</label>
                </div>
              </div>
              </div>
            </div> 
          </div>
          <div className="kpi-triggers-area">
            <img src={toggle_icon} />
          </div>
        </div>
      </>
    );
  }
}

export default KPI;
