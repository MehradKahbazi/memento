import { Outlet } from "react-router-dom";
import Sidebar from "../Sidbar/Sidebar";

const Admin = () => {


  return (
    <div className="container-fluid" dir="rtl">
      <div className="row vh-50">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">{/* main container */}</div>
      </div>
    </div>
  );
};

export default Admin;
