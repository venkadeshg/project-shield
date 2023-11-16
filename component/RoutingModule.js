import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavComp from "./NavComp";
import HomeComp from "./HomeComp";
import MenuComp from "./MenuComp";
import AboutComp from "./AboutComp";
import ContactComp from "./ContactComp";
import FooterComp from "./FooterComp";
import BodyComp from "./BodyComp";
import LoginComp from "./LoginComp";
import RegisterComp from "./RegisterComp";
import SidebarComp from "./SidebarComp";
import SareeComp from './SareeComp';
import LehengaComp from './LehengaComp';
import TopsComp from './TopsComp';
import JeansComp from './JeansComp';
import 'bootstrap/dist/css/bootstrap.min.css';



class MyRoutingComp extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <div className="card border">
                        <div className="card-header" style={{ backgroundColor: "white" }}>
                            <NavComp />
                        </div>

                        <div className="card-body" style={{ overflow: 'auto', height: '100vh'}}>
                            <Routes>
                                <Route path="" element={<BodyComp />} />
                                <Route path="HomeComp" element={<HomeComp />} />
                                <Route path="MenuComp" element={<MenuComp />} />
                                <Route path="AboutComp" element={<AboutComp />} />
                                <Route path="ContactComp" element={<ContactComp />} />
                                <Route path="LoginComp" element={<LoginComp />} />
                                <Route path="RegisterComp" element={<RegisterComp />} />
                                <Route path="SidebarComp" element={<SidebarComp />}>
                                    <Route path="SareeComp" element={<SareeComp />} />
                                    <Route path="LehengaComp" element={<LehengaComp />} />
                                    <Route path="JeansComp" element={<JeansComp />} />
                                    <Route path="TopsComp" element={<TopsComp />} />
                                </Route>
                                {/* <Route path="/productdetails" element={<ProductDetails />} />
                                <Route path="/logout" element={<Logout />} /> */}

                            </Routes>
                        </div>
                        <div className="card-footer">
                            <FooterComp/>
                        </div>

                       
                    </div>
                    
                </div>
            </Router>
        );
    }
}

export default MyRoutingComp;


