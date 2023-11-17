// LayoutComp.js

import React from 'react';
import NavComp from './NavComp';
import FooterComp from './FooterComp';
import SidebarComp from './SidebarComp';


const LayoutComp = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="card border">
        <div className="card-header" style={{ backgroundColor: 'white' }}>
          <NavComp />
        </div>
        <div className="card-body" style={{ overflow: 'auto', height: '100vh' }}>
          <div className="row flex-nowrap">
            <SidebarComp />
            <div className="col py-3">
              <div className="content">
                
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <FooterComp />
        </div>
      </div>
    </div>
  );
};

export default LayoutComp;
