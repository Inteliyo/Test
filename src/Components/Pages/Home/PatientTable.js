import React, { Component } from "react";
import "./PatientTable.css";

import search_icon from "../../../Assets/Search.svg";
import add_icon from "../../../Assets/Add.svg";
import clock_icon from "../../../Assets/Clock icon.svg";
import delete_icon from "../../../Assets/Delet icon.svg";
import eye_icon from "../../../Assets/Eye icon.svg";
import lab_reports from "../../../Assets/Pending lab reports.svg";
import prescription_icon from "../../../Assets/Prescription icon.svg";
import notes_icon from "../../../Assets/Notes icon.svg";
import todo_icon from "../../../Assets/To do list.svg";

function toggle_table() {
  var div = document.getElementById("table_body_1");
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
    div.style.transition = "transition: all .5s ease-in-out;";
  }
}

function toggle_table2() {
  var div2 = document.getElementById("table_body_3");
  if (div2.style.display !== "none") {
    div2.style.display = "none";
  } else {
    div2.style.display = "block";
  }
}

function toggle_table1() {
  var div1 = document.getElementById("table_body_2");
  if (div1.style.display !== "none") {
    div1.style.display = "none";
  } else {
    div1.style.display = "block";
  }
}

function strike() {
  var m = document.getElementById("1");
  if (m.style.textDecoration !== "line-through") {
    m.style.textDecoration = "line-through";
    m.style.color = "grey";
  } else {
    m.style.textDecoration = "none";
  }
}

function strike1() {
  var m = document.getElementById("2");
  if (m.style.textDecoration !== "line-through") {
    m.style.textDecoration = "line-through";
    m.style.color = "grey";
  } else {
    m.style.textDecoration = "none";
  }
}

function strike2() {
  var m = document.getElementById("3");
  if (m.style.textDecoration !== "line-through") {
    m.style.textDecoration = "line-through";
    m.style.color = "grey";
  } else {
    m.style.textDecoration = "none";
  }
}

class PatientTable extends Component {
  render() {
    return (
      <>
        <div className="mbsc-grid">
          <div className="table-main">
            <div className="table-head">
              <div className="mbsc-row">
                <div className="mbsc-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29.256"
                    height="24.005"
                    viewBox="0 0 29.256 24.005"
                    className="table_icon_head"
                  >
                    <g
                      id="Group_466"
                      data-name="Group 466"
                      transform="translate(-288.132 -219.93)"
                    >
                      <path
                        id="Path_263"
                        data-name="Path 263"
                        d="M750.807,819.87v14.616a1.377,1.377,0,0,1-1.386,1.387H723.939a1.378,1.378,0,0,1-1.387-1.387V819.87"
                        transform="translate(-433.92 -592.438)"
                        fill="none"
                        stroke="#6c5b7b"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                      <path
                        id="Path_264"
                        data-name="Path 264"
                        d="M727.416,815.46a1.224,1.224,0,0,0-.114.5,1.319,1.319,0,0,0,2.637,0,1.225,1.225,0,0,0-.114-.5"
                        transform="translate(-433.92 -592.438)"
                        fill="none"
                        stroke="#6c5b7b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                      <line
                        id="Line_83"
                        data-name="Line 83"
                        y1="3.069"
                        transform="translate(294.701 220.43)"
                        fill="none"
                        stroke="#6c5b7b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                      <path
                        id="Path_265"
                        data-name="Path 265"
                        d="M745.966,815.46a1.241,1.241,0,0,1,.114.5,1.319,1.319,0,0,1-2.637,0,1.239,1.239,0,0,1,.113-.5"
                        transform="translate(-433.92 -592.438)"
                        fill="none"
                        stroke="#6c5b7b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                      <line
                        id="Line_84"
                        data-name="Line 84"
                        y1="3.069"
                        transform="translate(310.841 220.43)"
                        fill="none"
                        stroke="#6c5b7b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                      <line
                        id="Line_85"
                        data-name="Line 85"
                        x1="13.275"
                        transform="translate(296.133 221.271)"
                        fill="none"
                        stroke="#6c5b7b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                      <path
                        id="Path_266"
                        data-name="Path 266"
                        d="M727.167,813.709h-3.205a1.378,1.378,0,0,0-1.387,1.387v4.774h28.233V815.1a1.378,1.378,0,0,0-1.387-1.387h-3.205"
                        transform="translate(-433.92 -592.438)"
                        fill="none"
                        stroke="#6c5b7b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                      <line
                        id="Line_86"
                        data-name="Line 86"
                        y2="2.887"
                        transform="translate(296.656 230.455)"
                        fill="none"
                        stroke="#6c5b7b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                      <line
                        id="Line_87"
                        data-name="Line 87"
                        y2="2.887"
                        transform="translate(300.726 230.455)"
                        fill="none"
                        stroke="#6c5b7b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                      <line
                        id="Line_88"
                        data-name="Line 88"
                        y2="2.887"
                        transform="translate(304.817 230.455)"
                        fill="none"
                        stroke="#6c5b7b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                      <line
                        id="Line_89"
                        data-name="Line 89"
                        y2="2.887"
                        transform="translate(308.886 230.455)"
                        fill="none"
                        stroke="#6c5b7b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                      <line
                        id="Line_90"
                        data-name="Line 90"
                        y2="2.887"
                        transform="translate(296.656 237.479)"
                        fill="none"
                        stroke="#6c5b7b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                      <line
                        id="Line_91"
                        data-name="Line 91"
                        y2="2.887"
                        transform="translate(300.726 237.479)"
                        fill="none"
                        stroke="#6c5b7b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                      <line
                        id="Line_92"
                        data-name="Line 92"
                        y2="2.887"
                        transform="translate(304.817 237.479)"
                        fill="none"
                        stroke="#6c5b7b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                      <line
                        id="Line_93"
                        data-name="Line 93"
                        y2="2.887"
                        transform="translate(308.886 237.479)"
                        fill="none"
                        stroke="#6c5b7b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                      <line
                        id="Line_94"
                        data-name="Line 94"
                        x2="16.821"
                        transform="translate(294.36 235.433)"
                        fill="none"
                        stroke="#6c5b7b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                      <path
                        id="Path_267"
                        data-name="Path 267"
                        d="M742.987,817.152a2.155,2.155,0,0,1-.363-1.079H730.735a2.14,2.14,0,0,1-4.273,0h-2.728v2.637H749.6v-2.637H746.9a2.159,2.159,0,0,1-2.136,2.023,2.135,2.135,0,0,1-1.774-.944"
                        transform="translate(-433.92 -592.438)"
                        fill="#6c5b7b"
                      />
                    </g>
                  </svg>

                  <p className="_table_heading_text">Appointments</p>
                </div>
                <div className="mbsc-col"></div>
              </div>
            </div>
            <div className="table-body-main">
              <div className="table-data-area  table-responsive">
                <table id="patient-table">
                  <tr id="tablehead">
                    <th></th>
                    <th>
                      Patient Name <i className="fa fa-filter"></i>
                    </th>
                    <th>
                    Time <i className="fa fa-filter"></i>
                    </th>
                    <th>
                      Disease <i className="fa fa-filter"></i>
                    </th>
                    <th>
                      Consl. Type <i className="fa fa-filter"></i>
                    </th>
                    <th>
                      Room No. <i className="fa fa-filter"></i>
                    </th>
                    <th>
                      Fee <i className="fa fa-filter"></i>
                    </th>
                    <th></th>
                    <th></th>
                  </tr>

                  <tr>
                    <td>
                      <div className="green_circle"></div>
                    </td>
                    <td>
                      <img
                        src="https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                        className="patient_profile_img"
                      />
                      &nbsp;&nbsp; Kate Barke 
                    </td>
                    <td>12:40 PM</td>
                    <td>Fever</td>
                    <td>F2F</td>
                    <td>202</td>
                    <td>Paid</td>
                    <td>
                      <img src={clock_icon} />
                    </td>
                    <td>
                      <img src={delete_icon} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="green_circle"></div>
                    </td>
                    <td>
                      <img
                        src="https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                        className="patient_profile_img"
                      />
                      &nbsp;&nbsp; Kate Barke
                    </td>
                    <td>12:40 PM</td>
                    <td>Fever</td>
                    <td>F2F</td>
                    <td>202</td>
                    <td>Paid</td>
                    <td>
                      <img src={clock_icon} />
                    </td>
                    <td>
                      <img src={delete_icon} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="green_circle"></div>
                    </td>
                    <td>
                      <img
                        src="https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                        className="patient_profile_img"
                      />
                      &nbsp;&nbsp; Kate Barke
                    </td>
                    <td>12:40 PM</td>
                    <td>Fever</td>
                    <td>F2F</td>
                    <td>202</td>
                    <td>Paid</td>
                    <td>
                      <img src={clock_icon} />
                    </td>
                    <td>
                      <img src={delete_icon} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="green_circle"></div>
                    </td>
                    <td>
                      <img
                        src="https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                        className="patient_profile_img"
                      />
                      &nbsp;&nbsp; Kate Barke
                    </td>
                    <td>12:40 PM</td>
                    <td>Fever</td>
                    <td>F2F</td>
                    <td>202</td>
                    <td>Paid</td>
                    <td>
                      <img src={clock_icon} />
                    </td>
                    <td>
                      <img src={delete_icon} />
                    </td>
                  </tr>
                </table>
              </div>

              <div className="_table_footer">
                <p>
                  Showing
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  Records
                </p>

                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>


      </>
    );
  }
}

export default PatientTable;
