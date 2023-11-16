import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../Shared/Images/woman-clothes.png';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Sidebar.css';

const SidebarComp = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <img src={logo} alt="hugenerd" width="30" height="30" className="rounded-circle"/>
              <span className="fs-5 d-none d-sm-inline">Women's Cloth</span>
            </Link>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              {/* <li className="nav-item">
                <Link to="/" className="nav-link" activeClassName="active" exact>
                  Home
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="SareeComp" className="nav-link" activeClassName="active">
                  Saree
                </Link>
              </li>
              <li className="nav-item">
                <Link to="LehengaComp" className="nav-link" activeClassName="active">
                  Leghenga
                </Link>
              </li>
              <li className="nav-item">
                <Link to="JeansComp" className="nav-link" activeClassName="active">
                  Jeans
                </Link>
              </li>
              <li className="nav-item">
                <Link to="TopsComp" className="nav-link" activeClassName="active">
                  Tops
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/productdetails" className="nav-link" activeClassName="active">
                  ProductDetails
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className="nav-link" activeClassName="active">
                  Logout
                </Link>
              </li>
              {/* Add other menu items as needed */}
            </ul>
            {/* Add user dropdown and additional content if required */}
          </div>
        </div>
        <div className="col py-3">
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarComp;
