import { Outlet } from "react-router-dom";
import Sidebar from "../Sidbar/Sidebar";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const Admin = () => {

    const {setCollapse} = useContext(AuthContext)

  return (
    <div className="container-fluid" dir="rtl">
        <div className="col-md-3">
          <Sidebar />
        </div>
      <div className="row vh-50">
        <div className="col-md-12">
        <a class="btn btn-primary btn-customized open-menu" href="#" role="button" onClick={() =>{setCollapse(prevState => !prevState)}}>
                    <i class="fal fa-align-right"></i> <span>Menu</span>
                </a>
        </div>
      </div>
    </div>
  );
};

export default Admin;
