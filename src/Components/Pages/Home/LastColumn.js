import React, { Component } from "react";
import "./LastColumn.css";

const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

// do the work...
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr) );
})));

class LastColumn extends Component {
  render() {
    return (
      <>
        <div class="container-fluid mt-5 mb-5">
          <div class="row">
            <div
              class="col-md-12 col-lg-6 col-sm-12 col-12"
              id="todolist-table"
            >
              <div className="container-card-main">
                  <div className="container-card-header"></div>
                  <div className="container-card-body">

                    <div className="container-card-data" id="todolist-data">
                        <table>
                            <tr>
                                <th>Items <i className="fa fa-filter"></i></th>
                                <th>Due Date <i className="fa fa-filter"></i></th>
                                <th>Priority <i className="fa fa-filter"></i></th>
                            </tr>
                            <tr>
                                <td>
                                <input type="checkbox" id="todolist-check" /> Attend Conference
                                </td>
                                <td>11.11.2021</td>
                                <td className="high">High</td>
                            </tr>
                            <tr>
                                <td>
                                <input type="checkbox" id="todolist-check" /> Abc
                                </td>
                                <td>11.11.2021</td>
                                <td className="high">High</td>
                            </tr>
                            <tr>
                                <td>
                                <input type="checkbox" id="todolist-check" /> Attend Conference
                                </td>
                                <td>11.11.2021</td>
                                <td className="high">High</td>
                            </tr>

                        </table>
                    </div>


                      <div className="container-card-footer">
                          <div className="row">
                              <div className="col-md-6 col-lg-6 col-12" >
                              <p className="row-selector">
                  Showing
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  Records
                </p>

                              </div>
                              <div className="col-md-6 col-lg-6 col-12">
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
              </div>
            </div>
            <div
              className="col-md-12 col-lg-6 col-sm-12 col-12"
              id="labreport-table"
            >
              <div className="container-card-main">
                  <div className="container-card-header"></div>
                  <div className="container-card-body">
                  <div className="container-card-footer">
                          <div className="row">
                              <div className="col-md-6 col-lg-6 col-12" >
                              <p className="row-selector">
                  Showing
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  Records
                </p>

                              </div>
                              <div className="col-md-6 col-lg-6 col-12">
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
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LastColumn;
