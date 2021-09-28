import React from "react";
import { Component } from "react";
import LeftNavigation from "../../Common/LeftNavigation/LeftNavigation";
import TopNavigation from "../../Common/TopNavigation/TopNavigation";
import './Home.css';
import KPI from "./KPI";
import PatientTable from "./PatientTable";
import LastColumn from "./LastColumn";

class Home extends Component{
    render(){
        return(
            <>
            <LeftNavigation />
            <div className="main-body-area">
                <TopNavigation />
            {/* Main Body Elements */}
            <main>
                <KPI />
                <PatientTable />
                <LastColumn />
            </main>
            </div>
            </>
        )
    }
}

export default Home;