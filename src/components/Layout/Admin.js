import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const Admin = () => {
  const { setCollapse } = useContext(AuthContext);

  return (
    <div className="container-fluid" dir="rtl">
      <div className="row vh-50">
        <div className="col-md-3  vh-100 d-flex flex-column border-left d-lg-block d-sm-none d-xs-none ">
          <Sidebar/>
        </div>
        <div className="col-md-9">
          <a
            className="btn btn-primary btn-customized open-menu"
            href="#"
            role="button"
            onClick={() => {
              setCollapse((prevState) => !prevState);
            }}
          >
            <i className="fal fa-align-right"></i> <span>Menu</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Admin;
