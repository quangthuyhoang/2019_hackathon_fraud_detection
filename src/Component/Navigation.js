import React, { Component } from 'react';
import '../vendor/bootstrap/css/bootstrap-grid.css';
import '../vendor/bootstrap/css/bootstrap-reboot.min.css';
import '../vendor/bootstrap/css/bootstrap.min.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="side-navbar">
      <div className="side-navbar-wrapper">
        {/* <!-- Sidebar Header    --> */}
        <div className="sidenav-header d-flex align-items-center justify-content-center">
          {/* <!-- User Info--> */}
          <div className="sidenav-header-inner text-center"><img src="img/avatar-7.jpg" alt="person" className="img-fluid rounded-circle" />
            <h2 className="h5">Nathan Andrews</h2><span>Web Developer</span>
          </div>
          {/* <!-- Small Brand information, appears on minimized sidebar--> */}
          <div className="sidenav-header-logo"><a href="index.html" className="brand-small text-center"> <strong>B</strong><strong className="text-primary">D</strong></a></div>
        </div>
        {/* <!-- Sidebar Navigation Menus--> */}
        <div className="main-menu">
          <h5 className="sidenav-heading">Main</h5>
          <ul id="side-main-menu" className="side-menu list-unstyled">                  
            <li><a href="index.html"> <i className="icon-home"></i>Home                             </a></li>
            <li><a href="forms.html"> <i className="icon-form"></i>Forms                             </a></li>
            <li><a href="charts.html"> <i className="fa fa-bar-chart"></i>Charts                             </a></li>
            <li><a href="tables.html"> <i className="icon-grid"></i>Tables                             </a></li>
            <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i className="icon-interface-windows"></i>Example dropdown </a>
              <ul id="exampledropdownDropdown" className="collapse list-unstyled ">
                <li><a href="#">Page</a></li>
                <li><a href="#">Page</a></li>
                <li><a href="#">Page</a></li>
              </ul>
            </li>
            <li><a href="login.html"> <i className="icon-interface-windows"></i>Login page                             </a></li>
            <li> <a href="#"> <i className="icon-mail"></i>Demo
                <div className="badge badge-warning">6 New</div></a></li>
          </ul>
        </div>
     
      </div>
    </nav>
    );
  }
}

export default Navigation;


      