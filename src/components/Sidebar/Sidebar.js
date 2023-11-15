import styles from "../../assets/styles/main.css";
import Logo from "../../assets/images/dashboard-dashboard-sidebar-vertical-logo-full-1.png";
import Avatar from "../../assets/images/dashboard-dashboard-sidebar-vertical-img.png"
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (

      <div className="">
        <div className="row justify-content-center">
          <img src={Logo} className="col-md-4 mt-5" />
        </div>
        <div className="row justify-content-center">
          <img src={Avatar} className="col-md-4 mt-5"/>
        </div>
        <div className="col-md-12">
        <nav className="navbar navbar-expand-lg navbar-light mt-2">
          <div className="container">
            <ul className="navbar-nav flex-column vw-100">
  
              <li className="nav-item mb-2 ">
                <Link className="nav-link text-end hover" href="#">
                خانه <i className="bi bi-house-door mx-2"></i> 
                </Link>
              </li>
          
              <li className="nav-item mb-2">
                <Link className="nav-link text-end hover" href="#">
                کیف پول  <i className="bi bi-wallet mx-2"></i> 
                </Link>
              </li>

              <li className="nav-item mb-2">
                <Link className="nav-link text-end hover" href="#">
                مستر کارت  <i className="bi bi-credit-card mx-2"></i> 
                </Link>
              </li>

              <li className="nav-item mb-2">
                <Link className="nav-link text-end hover " href="#">
                انتقال وجه بانکی  <i className="bi bi-arrow-left-right mx-2"></i> 
                </Link>
              </li>

              <li className="nav-item mb-2">
                <Link className="nav-link text-end hover" href="#">
                برداشت وجه  <i className="bi bi-box-arrow-down mx-2"></i> 
                </Link>
              </li>

              <li className="nav-item mb-2">
                <Link className="nav-link text-end hover" href="#">
                تراکنش ها <i className="bi bi-list-check mx-2"></i> 
                </Link>
              </li>

              <li className="nav-item mb-2">
                <Link className="nav-link text-end hover" href="#">
                پروفایل  <i className="bi bi-person mx-2"></i> 
                </Link>
              </li>

              <hr className="ms-3"/>

              <li className="nav-item mb-2">
                <Link className="nav-link bold text-danger text-end hover" href="#">
                خروج از حساب  <i className="bi bi-box-arrow-left mx-2"></i> 
                </Link>
              </li>

            </ul>
          </div>
        </nav>
        </div>
      </div>

  );
};

export default Sidebar;
